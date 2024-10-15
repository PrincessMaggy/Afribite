import { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Button from "../components/button"
import { FiImage } from "react-icons/fi";
import { LuPoundSterling } from "react-icons/lu";
import { ChoiceDate } from "../components/ui/DatePicker";
import { Link} from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Advert = () => {
  const [adForm, setAdForm] = useState({Title: '', Description: '', image:'', budget:'', audience:'' })
  const [imagePreview, setImagePreview] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target
    setAdForm((prev)=>(
      {...prev,
        [name]: value
      }
    ))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAdForm((prev)=>(
        {...prev,
          image: file
        }
      ))
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore();
      const storage = getStorage();

      let imageUrl = null;
      if (adForm.image) {
        const storageRef = ref(storage, `adverts/${adForm.image.name}`);
        await uploadBytes(storageRef, adForm.image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const docRef = await addDoc(collection(db, 'adverts'), {
        title : adForm.Title,
        description : adForm.Description,
        image : imageUrl,
        audience : adForm.audience,
        budget: adForm.budget
      });

      console.log("Document written with ID: ", docRef.id);
    
    
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    const notify =()=> {
      toast.success("Ad posted successfully!", {
        position: "top-right",
      })
    }

    notify()
    
    setAdForm(()=>(
      {
        Title: '',
        Description: '', 
        image:'', 
        budget:'', 
        audience:'' }
    )
    )

    setImagePreview(null)

  };



  useEffect(()=>{
    console.log(adForm)
    
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, get the user's UID
        setUserId(user.uid);
        console.log(user.uid);
      } else {
        // No user is signed in
        setUserId(null);
      }
    });

    return () => unsubscribe();
  },[adForm])

  return (
    <div className="w-[90%] m-auto p-6 lg:px-32 lg:py-16 bg-n-n6 rounded-lg shadow-md overflow-hidden">
      {/* banner section */}
      <Banner
        text={"Boost Your Brand Visibility and Drive Sales with Advertisements"}
      />

      <ToastContainer />

      {/* Ad form */}
      <form action="" className="mt-6 sm:mt-8 w-full" onSubmit={handleSubmit} >
        <h1 className="font-semibold sm:text-2xl text-[#E2725B] text-start">
          Create Ad
        </h1>

            <p className="mt-4 font-semibold text-[#E2725B]">Ad title</p>
            <input
            required
            name="Title"
            value={adForm.Title}
            onChange={handleChange}
            type="text" 
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] "/>

            <p className="mt-4 font-semibold text-[#E2725B] ">Description</p>
            <textarea
            required
            placeholder="Write a detailed description about your Ad" 
            name="Description"
            value={adForm.Description}
            onChange={handleChange}
            id="" 
            rows={5} 
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] placeholder:text-[#E2725B]/40 placeholder:p-1"></textarea>

        <p className="mt-4 font-semibold text-[#E2725B] ">Upload image</p>
        <div className="flex gap-4 items-center p-4 bg-white justify-center border-2 border-dashed">
        {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover" />
            ) : (
              <FiImage className="text-5xl text-n-n3" />
            )}
          <p className="">
            Upload an image for your restaurant banner (GIF,JPG or PNG){" "}
          </p>
          <label
            htmlFor="file"
            className="inline-block box-border border-2 pointer bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop hover:text-p-button hover:bg-n-n7 "
          >
            Browse
          </label>
          <input
            required
            id="file"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <div className="flex justify-between text-sm md:text-base mt-4 px-3 ">
          <div>
          <p className="mt-4 font-semibold text-[#E2725B]">Audience</p>

          <div className="mt-2">
          <div className="flex gap-2 ">
          <input name="audience" type="radio" value='everybody' className="" onChange={handleChange} /> <p className="text-[#E2725B]">Everyone</p>
          </div>
          
          <div className="flex gap-2">
          <input  name="audience" type="radio" value='newcomers' className="" onChange={handleChange} /> <p className="text-[#E2725B]">Newcomers</p>
          </div>
          </div>
            
          </div>

          <div>
            <p className="mt-4 font-semibold text-[#E2725B]">Budget</p>
            <div className='relative flex '>
              <LuPoundSterling className="absolute left-2 top-3.5 text-n-n3" />
              <input
              required
              name="budget"
              value={adForm.budget}
              onChange={handleChange}
              type="number" 
              className="border-2 bg-inherit border-[#E2725B]/20 w-full pl-6 p-2 rounded-lg focus:outline-none focus:border-[#E2725B] "/>     
            </div>
          </div>
        </div>


        <div className="flex justify-between text-sm md:text-base mt-4  ">
              <span>
                 <h3 className="text-[#E2725B] font-semibold">Start date</h3>
                 <ChoiceDate />
              </span>

              <span className="md:inline-block hidden">
                   <h3 className="text-[#E2725B] font-semibold ">End date</h3>
                   <ChoiceDate/>
              </span>
        </div>        
        <div className="flex justify-end items-center mt-4 gap-5">
        <button type="submit" className="p-3 border-2 text-xs lg:text-sm text-white bg-p-button3 rounded-md transition-colors hover:border-p-button3 hover:text-p-button3 hover:bg-white ">
            Post Ad
          </button>
        <Button text='Save as draft' />
        <Link to='/Adminhome/Dashboard'><p className="text-[#E2725B] font-semibold">Cancel</p></Link>
        </div>
      </form>
    </div>
  );
};

export default Advert;
