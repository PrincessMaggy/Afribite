import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "../components/Banner";
import Button from "../components/button";
import { FiImage } from "react-icons/fi";
import Category from "../components/ui/Category";
import ChoiceDate from "../components/ui/DatePicker";
import { profileContext } from '../context/ProfileContext';
import { useAuth } from "../context/AuthenticationContext";
import LoadingButton from "../components/LoadingButton";

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

const Promotions = () => {
  const { adForm, setAdForm } = useContext(profileContext);
  const { user } = useAuth();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPromotions, setShowPromotions] = useState(false);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchPromotions();
    }
  }, [user]);

  useEffect(() => {
    setAdForm(prev => ({
      ...prev,
      promotions: {
        ...prev.promotions,
        startDate: prev.promotions?.startDate || new Date().toISOString(),
        endDate: prev.promotions?.endDate || new Date().toISOString(),
      }
    }));
  }, [setAdForm]);

  const throttledSuccessToast = useCallback(
    throttle((message) => toast.success(message), 5000),
    []
  );

  const throttledErrorToast = useCallback(
    throttle((message) => toast.error(message), 5000),
    []
  );

  const throttledWarnToast = useCallback(
    throttle((message) => toast.warn(message), 5000),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdForm(prev => ({
      ...prev,
      promotions: { ...prev.promotions, [name]: value }
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAdForm(prev => ({
        ...prev,
        promotions: {
          ...prev.promotions,
          image: file,
          imagePreview: URL.createObjectURL(file)
        }
      }));
    }
  };

  const handleDateChange = (date, field) => {
    if (date && !isNaN(date.getTime())) {
      setAdForm(prev => ({
        ...prev,
        promotions: {
          ...prev.promotions,
          [field]: date.toISOString(),
          ...(field === 'startDate' && date > new Date(prev.promotions?.endDate || Date.now()) 
              ? { endDate: date.toISOString() } 
              : {})
        }
      }));
    }
  };

  const clearForm = useCallback(() => {
    setAdForm(prev => ({
      ...prev,
      promotions: {
        title: '',
        description: '',
        image: null,
        imagePreview: null,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        category: ''
      }
    }));
    setTermsAccepted(false);
  }, [setAdForm]);

  const fetchPromotions = useCallback(async () => {
    if (!user) return;

    try {
      const db = getFirestore();
      const promotionsRef = collection(db, "promotions", user.uid, "promotionData");
      const q = query(promotionsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const promotionsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() 
      }));
      setPromotions(promotionsData);
    } catch (error) {
      console.error("Error fetching promotions: ", error);
      toast.error("Error fetching promotions. Please try again.");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      throttledWarnToast("Please accept the terms and conditions");
      return;
    }

    try {
      setLoading(true);
      const db = getFirestore();
      const storage = getStorage();

      let imageUrl = null;
      if (adForm.promotions.image) {
        const storageRef = ref(storage, `promotions/${user.uid}/${adForm.promotions.image.name}`);
        await uploadBytes(storageRef, adForm.promotions.image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const userSubcollectionRef = collection(db, "promotions", user.uid, "promotionData");
      await addDoc(userSubcollectionRef, {
        title: adForm.promotions.title,
        description: adForm.promotions.description,
        startDate: adForm.promotions.startDate,
        endDate: adForm.promotions.endDate,
        category: adForm.promotions.category,
        imageUrl,
        createdAt: new Date()
      });

      setLoading(false);
      throttledSuccessToast("Promotion added successfully!");
      fetchPromotions();
      clearForm();
    } catch (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
      throttledErrorToast("Error adding promotion. Please try again.");
    }
  };

  const handleDeletePromotion = useCallback((id) => {
    throttledWarnToast(
      <div>
        <p>Are you sure you want to delete this promotion?</p>
        <div className="mt-2">
          <button 
            onClick={() => confirmDeletePromotion(id)} 
            className="mr-2 px-2 py-1 bg-red-500 text-white rounded"
          >
            Yes
          </button>
          <button 
            onClick={() => toast.dismiss()} 
            className="px-2 py-1 bg-gray-500 text-white rounded"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false
      }
    );
  }, []);

  const confirmDeletePromotion = useCallback(async (id) => {
    try {
      const db = getFirestore();
      await deleteDoc(doc(db, "promotions", user.uid, "promotionData", id));
      throttledSuccessToast("Promotion deleted successfully!");
      fetchPromotions();
    } catch (error) {
      console.error("Error deleting promotion: ", error);
      throttledErrorToast("Error deleting promotion. Please try again.");
    }
  }, [fetchPromotions, user]);

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  }, []);

  return (
    <div className="w-[90%] m-auto auto p-6 lg:px-32 lg:py-16 bg-n-n6 rounded-lg shadow-md overflow-hidden">
      <Banner text={"12% per annum"} />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> 
      
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <h1 className="font-semibold sm:text-2xl text-[#E2725B] text-start">
          Create Promotion
        </h1>
        
        {/* Form fields */}
        <div>
          <label htmlFor="promotionTitle" className="block mb-2 font-semibold text-[#E2725B]">Title field</label>
          <input
            type="text"
            id="promotionTitle"
            name="title"
            value={adForm.promotions?.title || ''}
            onChange={handleChange}
            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
            required
          />
        </div>

        <div>
          <label htmlFor="promotionDescription" className="block mb-2 font-semibold text-[#E2725B]">Description</label>
          <textarea
            id="promotionDescription"
            name="description"
            placeholder="Write a detailed description about your Promotion" 
            rows={3}
            value={adForm.promotions?.description || ''}
            onChange={handleChange}
            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
            required
          />
        </div>

        <Category name="category" handleChange={handleChange} value={adForm.promotions?.category || ''} />

        <ChoiceDate
          startDate={new Date(adForm.promotions?.startDate)}
          endDate={new Date(adForm.promotions?.endDate)}
          handleDateChange={handleDateChange}
        />

        {/* Image Upload */}
        <div>
          <label className="block mb-2 font-semibold text-[#E2725B]">Upload Image</label>
          <div className="w-full bg-white border-2 border-[#E2725B]/20 flex justify-between items-center p-2 rounded-md">
            <label
              htmlFor="uploadImage"
              className="flex items-center cursor-pointer space-x-1"
            >
              <FiImage className="w-6 h-6 text-[#E2725B]" />
              <span className="text-[#E2725B] text-sm">Upload</span>
            </label>
            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <span className="text-sm text-gray-500">
              {adForm.promotions?.image ? adForm.promotions.image.name : 'No file chosen'}
            </span>
          </div>

          {adForm.promotions?.imagePreview && (
            <div className="mt-2">
              <img src={adForm.promotions.imagePreview} alt="Preview" className="max-w-xs rounded-md" />
            </div>
          )}
        </div>

        {/* Terms acceptance */}
        <div>
          <label htmlFor="acceptTerms" className="inline-flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="form-checkbox h-5 w-5 text-[#E2725B] rounded"
              required
            />
            <span className="ml-2 text-[#E2725B] font-medium">I accept the terms and conditions</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="pt-4 mt-2 flex justify-end space-x-4">
          {/* Create button */}
          {loading ? (
            <LoadingButton />
          ) : (
            <button type="submit" className="px-4 py-2 bg-[#E2725B] text-white rounded-md hover:bg-[#D1614A] transition-colors">
              Create
            </button>
          )}

          {/* Clear form button */}
          <Button text="Clear form" className="w-auto" onClick={clearForm} />

          {/* Cancel button */}
          <Link to="/Adminhome/Dashboard">
            <p className="text-[#E2725B] border-[#E2725B] border p-3 ml-1 rounded font-semibold">Cancel</p>
          </Link>
        </div>
      </form>

      {/* Display promotions */}
      {promotions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#E2725B]">Your Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {promotions.map(promo => (
              <div key={promo.id} className="border p-4 rounded-md shadow-md">
                <img src={promo.imageUrl} alt={promo.title} className="mb-4 rounded-md" />
                <h3 className="text-lg font-semibold">{promo.title}</h3>
                <p className="text-sm text-gray-600">{promo.description}</p>
                <p className="text-sm text-gray-600">Start Date: {formatDate(promo.startDate)}</p>
                <p className="text-sm text-gray-600">End Date: {formatDate(promo.endDate)}</p>
                <button onClick={() => handleDeletePromotion(promo.id)} className="mt-2 px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotions;
