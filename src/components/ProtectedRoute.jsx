
import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthenticationContext';


// Protected route component
const ProtectedRoute = ({ children }) => {
     const {user, loading} = useAuth()

  if (loading) return <div>Loading...</div>;

  // If no user is authenticated, redirect to login page
  if (!user) {
    return <Navigate to="/Sign-in" replace />;
  }

  // If the user is authenticated, allow access to the page
  return children;
};

export default ProtectedRoute;
