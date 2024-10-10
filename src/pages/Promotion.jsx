import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Banner from "../components/Banner";
import Button from "../components/button";
import { FiImage } from "react-icons/fi";
import Category from "../components/ui/Category";
import ChoiceDate from "../components/ui/DatePicker";
import AlertPopup from "../components/ui/AlertPopup";


const Promotions = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPromotions, setShowPromotions] = useState(false);
  const [promotions, setPromotions] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

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
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setAlertMessage("Please accept the terms and conditions");
      return;
    }

    try {
      const db = getFirestore();
      const storage = getStorage();

      let imageUrl = null;
      if (image) {
        const storageRef = ref(storage, `promotions/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const docRef = await addDoc(collection(db, "promotions"), {
        title,
        description,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        category,
        imageUrl,
        createdAt: new Date()
      });

      console.log("Document written with ID: ", docRef.id);
      alert("Promotion added successfully!");
      fetchPromotions(); 
      navigate('/Adminhome/Dashboard');
    } catch (error) {
      console.error("Error adding document: ", error);
      setAlertMessage("Error adding promotion. Please try again.");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  return (
    <div className="w-[90%] m-auto auto p-6 lg:px-32 lg:py-16 bg-n-n6 rounded-lg shadow-md overflow-hidden">
      <Banner text={"12% per annum"} />
      {alertMessage && <AlertPopup message={alertMessage} onClose={() => setAlertMessage("")} />}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block mb-2 font-semibold text-[#E2725B]">Title field</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-semibold text-[#E2725B]">Description</label>
          <textarea
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
            required
          ></textarea>
        </div>

        <div className="flex justify-between text-sm md:text-base">
          <span>
            <h3 className="text-[#E2725B]">Choose a Start date</h3>
            <ChoiceDate value={startDate} onChange={setStartDate} />
          </span>

          <span className="md:inline-block hidden">
            <h3 className="text-[#E2725B]">Calculated end date</h3>
            <ChoiceDate value={endDate} onChange={setEndDate} />
          </span>
        </div>

        <div>
          <p className="mb-2 font-semibold text-[#E2725B]">Upload image</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white border-2 border-dashed">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover" />
            ) : (
              <FiImage className="text-5xl text-n-n3" />
            )}
            <p className="text-center sm:text-left">Upload an image for your restaurant banner (GIF, JPG or PNG)</p>
            <label
              htmlFor="file"
              className="inline-block box-border border-2 cursor-pointer bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop hover:text-p-button hover:bg-n-n7"
            >
              Browse
            </label>
            <input id='file' type="file" accept="image/png, image/gif, image/jpeg" className="hidden" onChange={handleImageChange} />
          </div>
        </div>

        <Category value={category} onChange={setCategory} />

        <div className="flex items-center md:space-x-4 justify-between">
          <Button text='Save and Exit' className='w-auto' />

          <span className="flex w-24 md:w-auto text-sm md:text-base">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-white">
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
            Upload
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