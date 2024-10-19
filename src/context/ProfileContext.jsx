import { createContext, useState, useEffect } from "react";
import { useAuth } from '../context/AuthenticationContext';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';



export const profileContext = createContext()

const ProfileContextProvider = (props) => {
    const [myProfile, setMyProfile] = useState({})
    const [loading, setLoading] = useState(true);
    const [adForm, setAdForm] = useState({Title: '', Description: '', image:'', budget:'', audience:'' })
    const [adStartDate, setAdStartDate] = useState(new Date());
    const [adEndDate, setAdEndDate] = useState(adStartDate);
    const [adImagePreview, setAdImagePreview] = useState(null);
    const [userAdData, setUserAdData] = useState([]);  // State to store user data
    const { user } = useAuth();


    const fetchUserProfile = async () => {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
            setMyProfile(prevProfile => ({
              ...prevProfile,
                ...userDoc.data(),
            }));
        } else {
            setMyProfile(prevProfile => ({
                ...prevProfile,
                email: user.email || '',
                profileImage: user.photoURL || null
            }));
        }
        setLoading(false);
        
    };

    const fetchUserAdData = async () => {
        try {
          if (user) {
            const db = getFirestore();
            // Reference the "advertData" subcollection under the user's document
            const userSubcollectionRef = collection(db, 'adverts', user.uid, 'advertData');
            
            // Fetch all documents from the subcollection
            const querySnapshot = await getDocs(userSubcollectionRef);
            
            // Extract data from each document
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            // Update state with the fetched data
            setUserAdData(data);
            ;
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
          setLoading(false);
        }
    
        console.log(userAdData)
      };

  useEffect(() => {

    if (user) {
        fetchUserProfile();
        fetchUserAdData()
    }
}, [user]);

    const value = {
     myProfile,loading, 
     fetchUserProfile, 
     adForm, 
     setAdForm, 
     adEndDate, 
     setAdEndDate, 
     adStartDate, 
     setAdStartDate,
     adImagePreview, 
     setAdImagePreview,
     userAdData, 
     setUserAdData,
     fetchUserAdData
    }
    return(
        <profileContext.Provider value={value}>
            {props.children}
        </profileContext.Provider>
    )
}

export default ProfileContextProvider