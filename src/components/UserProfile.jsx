import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthenticationContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import profilePic from '../assets/profile.png';
import { FaRegUserCircle, FaUserEdit } from 'react-icons/fa';

const UserProfile = ({ className = '', onProfileFetch }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    username: '',
    restaurantName: '',
    phoneNo: '',
    email: '',
    address: '',
    profileImage: null
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) fetchUserProfile();
  }, [user]);

    const fetchUserProfile = async () => {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
            setProfile(prevProfile => ({
                ...userDoc.data(),
            }));
        } else {

            setProfile(prevProfile => ({
                ...prevProfile,
                email: user.email || '',
                profileImage: user.photoURL || null
            }));
        }
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `profileImages/${user.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setProfile(prevProfile => ({
        ...prevProfile,
        profileImage: downloadURL
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    await setDoc(doc(db, 'users', user.uid), profile);
    setIsEditing(false);
  };

  return (
    <div className={`max-w-md mx-auto p-2 bg-white rounded-lg shadow-x ${className}`}>
      <h1 className="text-center text-2xl font-medium my-4">My Profile</h1>
      <div className="text-center">
        <img
          src={profile.profileImage || user.photoURL || profilePic}
          alt="Profile"
          className={profile.profileImage || user.photoURL ? "m-auto h-[100px] w-[100px] rounded-[100%] bg-[#E2725B]" : "w-24 h-24 rounded-full mx-auto mb-2 bg-[#E2725B]"}
        />
        <p className="text-lg mt-2 font-semibold">{profile.username || user.displayName || "Welcome"}</p>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="pb-2 text-center space-y-6">
          <div className="my-2 mx-4">
            <label className="block text-center text-gray-700 text-base font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:border-red-600 transition duration-200"
            />
          </div>
          <div className="mb-4 mx-4">
            <label className="block text-gray-700 text-base font-medium mb-1" htmlFor="restaurantName">
              Restaurant's Name
            </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={profile.restaurantName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:border-red-600 transition duration-200"
            />
          </div>
          <div className="mb-4 mx-4">
            <label className="block text-gray-700 text-base font-medium mb-1" htmlFor="phoneNo">
              Phone No
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={profile.phoneNo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:border-red-600 transition duration-200"
            />
          </div>
          <div className="mb-4 mx-4">
            <label className="block text-gray-700 text-base font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-gray-100 cursor-not-allowed focus:outline-none"
            />
          </div>
          <div className="mb-4 mx-4">
            <label className="block text-gray-700 text-base font-medium mb-1" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:border-red-600 transition duration-200"
            />
          </div>
          <div className="mb-2 mx-2">
            <label className="inline-block text-gray-700 text-base font-medium mb-1" htmlFor="profileImage">
              Profile Image
              <span className="flex justify-center items-center mt-2 hover:scale-105 transition-all cursor-pointer">
                <FaRegUserCircle size={"45"} />
              </span>
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border hidden border-gray-300 rounded-lg text-gray-700 focus:border-red-600 transition duration-200"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <div className="flex m-4 items-center gap-x-4 justify-between">
            <button type="submit" className="bg-[#E2725B] w-24 h-10 text-sm hover:bg-[#c35f4c] text-white font-bold px-2 rounded-lg focus:outline-none focus:shadow-outline transition duration-200">
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 w-24 h-10 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="bg-inherit md:px-8">
            <div className="flex flex-col gap-2 my-2">
              <div>
                <h2 className="font-medium text-lg">Restaurant's Name</h2>
                <p className="mt-2">{profile.restaurantName}</p>
              </div>
              <div>
                <h2 className="font-medium text-lg">Phone No</h2>
                <p className="mt-2">{profile.phoneNo}</p>
              </div>
              <div className="overflow-hidden">
                <h2 className="font-medium text-lg">Email</h2>
                <p className="mt-2">{profile.email}</p>
              </div>
              <div>
                <h2 className="font-medium text-lg">Address</h2>
                <p className="mt-2">{profile.address}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-[#E2725B] flex justify-center py-1 flex-col items-center text-center hover:bg-[#c56e5d] text-white font-bold w-32 rounded focus:outline-none focus:shadow-outline"
              >
                <FaUserEdit className="w-20" />
                <p className="text-white">Edit Profile</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;


const RestaurantName = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const { user } = useAuth();
  
    useEffect(() => {
      const fetchRestaurantName = async () => {
        if (user) {
          const db = getFirestore();
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setRestaurantName(userDoc.data().restaurantName || '');
          }
        }
      };
  
      fetchRestaurantName();
    }, [user]);
  
    return <span>{restaurantName || "the best restaurant"}</span>;
  };

  export { RestaurantName };