import React, { useState, useEffect, useContext } from "react";
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

const Promotions = () => {
  const { adForm, setAdForm } = useContext(profileContext);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPromotions, setShowPromotions] = useState(false);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      const db = getFirestore();
      const promotionsRef = collection(db, "promotions");
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdForm(prev => ({ ...prev, promotions: { ...prev.promotions, [name]: value } }));
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
  };  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.warn("Please accept the terms and conditions");
      return;
    }

    try {
      const db = getFirestore();
      const storage = getStorage();

      let imageUrl = null;
      if (adForm.promotions.image) {
        const storageRef = ref(storage, `promotions/${adForm.promotions.image.name}`);
        await uploadBytes(storageRef, adForm.promotions.image);
        imageUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "promotions"), {
        title: adForm.promotions.title,
        description: adForm.promotions.description,
        startDate: adForm.promotions.startDate,
        endDate: adForm.promotions.endDate,
        category: adForm.promotions.category,
        imageUrl,
        createdAt: new Date()
      });

      toast.success("Promotion added successfully!");
      fetchPromotions();
      clearForm();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error adding promotion. Please try again.");
    }
  };

 const clearForm = () => {
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
  };


  const handleDeletePromotion = (id) => {
    toast.warn(
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
  };

  const confirmDeletePromotion = async (id) => {
    try {
      const db = getFirestore();
      await deleteDoc(doc(db, "promotions", id));
      toast.success("Promotion deleted successfully!");
      fetchPromotions();
    } catch (error) {
      console.error("Error deleting promotion: ", error);
      toast.error("Error deleting promotion. Please try again.");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  return (
    <div className="w-[90%] m-auto auto p-6 lg:px-32 lg:py-16 bg-n-n6 rounded-lg shadow-md overflow-hidden">
      <Banner text={"12% per annum"} />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
            rows={3}
            value={adForm.promotions?.description || ''}
            onChange={handleChange}
            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
            required
          ></textarea>
        </div>

        <div className="flex justify-between text-sm md:text-base">
          <span>
            <h3 className="text-[#E2725B]">Choose a Start date</h3>
            <ChoiceDate 
              value={adForm.promotions?.startDate ? new Date(adForm.promotions.startDate) : new Date()} 
              onChange={(date) => {
                setAdForm(prev => ({
                  ...prev,
                  promotions: {
                    ...prev.promotions,
                    startDate: date.toISOString(),
                    endDate: date > new Date(prev.promotions.endDate) ? date.toISOString() : prev.promotions.endDate
                  }
                }));
              }} 
              minDate={new Date()}
            />
          </span>

          <span className="md:inline-block hidden">
            <h3 className="text-[#E2725B]">Choose an End date</h3>
            <ChoiceDate 
              value={adForm.promotions?.endDate ? new Date(adForm.promotions.endDate) : new Date()} 
              onChange={(date) => setAdForm(prev => ({
                ...prev,
                promotions: { ...prev.promotions, endDate: date.toISOString() }
              }))} 
              minDate={adForm.promotions?.startDate ? new Date(adForm.promotions.startDate) : new Date()}
            />
          </span>
        </div>

        <div>
          <p className="mb-2 font-semibold text-[#E2725B]">Upload image</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white border-2 border-dashed">
            {adForm.promotions?.imagePreview ? (
              <img src={adForm.promotions.imagePreview} alt="Preview" className="w-32 h-32 object-cover" />
            ) : (
              <FiImage className="text-5xl text-n-n3" />
            )}
            <p className="text-center sm:text-left">Upload an image for your restaurant banner (GIF, JPG or PNG)</p>
            <label
              htmlFor="promotionImage"
              className="inline-block box-border border-2 cursor-pointer bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop hover:text-p-button hover:bg-n-n7"
            >
              Browse
            </label>
            <input id='promotionImage' type="file" accept="image/png, image/gif, image/jpeg" className="hidden" onChange={handleImageChange} />
          </div>
        </div>

        <Category 
          value={adForm.promotions?.category || ''} 
          onChange={(value) => setAdForm(prev => ({ 
            ...prev, 
            promotions: { ...prev.promotions, category: value } 
          }))} 
        />

        <div className="flex items-center md:space-x-4 justify-between">
          <Button text='Clear form' className='w-auto' onClick={clearForm} />

          <span className="flex w-24 md:w-auto text-sm md:text-base">
            <input
              type="checkbox"
              id="promotionTerms"
              className="mr-2"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="promotionTerms" className="text-white">
              Read <span className="text-[#E2725B] font-semibold">Terms and Conditions</span>
            </label>
          </span>
        </div>

        <div className="pt-4 mt-2 flex justify-between">
          <Link to='/Adminhome/Dashboard'>
            <button type="button" className="px-4 py-2 border border-[#E2725B] text-[#E2725B] rounded-md hover:bg-[#E2725B] hover:text-white transition-colors">
              Cancel
            </button>
          </Link>

          <button type="submit" className="px-4 py-2 bg-[#E2725B] text-white rounded-md hover:bg-[#D1614A] transition-colors">
            Create Promotion
          </button>
        </div>
      </form>

      <div className="mt-8">
        <button
          onClick={() => setShowPromotions(!showPromotions)}
          className="px-4 py-2 bg-[#E2725B] text-white rounded-md hover:bg-[#D1614A] transition-colors"
        >
          {showPromotions ? "Hide Promotions" : "Show Promotions"}
        </button>

        {showPromotions && (
          <div className="mt-4 p-4 border-2 border-[#E2725B] rounded-lg">
            <h3 className="text-xl font-semibold text-[#E2725B] mb-4">Promotions created</h3>
            {promotions.map((promo) => (
              <div key={promo.id} className="mb-4 p-2 bg-white/10 rounded flex">
                <div className="w-1/4 mr-4">
                  {promo.imageUrl ? (
                    <img src={promo.imageUrl} alt={promo.title} className="w-full h-auto object-cover rounded" />
                  ) : (
                    <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded">
                      <FiImage className="text-gray-400 text-4xl" />
                    </div>
                  )}
                </div>
                <div className="w-3/4">
                  <h4 className="font-semibold"> <span className="text-[#E2725B] "> TITLE: </span>  {promo.title}</h4>
                  <p> <span className="text-[#E2725B]"> Description: </span>  {promo.description}</p>
                  <p> <span className="text-[#E2725B]"> Category:  </span> {promo.category}</p>
                  <p> <span className="text-[#E2725B]"> Start Date:  </span> {formatDate(promo.startDate)}</p>
                  <p> <span className="text-[#E2725B]"> End Date:  </span> {formatDate(promo.endDate)}</p>
                  <p className="text-sm  text-gray-500"> <span className=" text-[#E2725B] ">Created:</span> {promo.createdAt.toLocaleString()}</p>
                  <button
                    onClick={() => handleDeletePromotion(promo.id)}
                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Delete Promotion
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Promotions;