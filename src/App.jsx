import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreateMenu from "./pages/CreateMenu";
import Dashboard from "./pages/Dashboard";
import Advert from "./pages/Advert";
import Layout from "./components/Layout";
import SignInForm from "./pages/Sign-in/SignIn";
import SignUpForm from "./pages/Sign-up/SignUp";
import Homepage from "./pages/Homepage";
import MenuForm from "./pages/MenuForm";
import Notifications from "./pages/Notifications";
import Promotions from "./pages/Promotion";
import Review from "./pages/review/Review";
import MainDish from "./pages/MainDish";
import { Rating } from "./pages/rating/Rating";
import LeaveReview from "./pages/leave_a_review/leave_review";
import Appetizer from "./pages/Appetizer";
import Side from "./pages/SIde";
import Soup from "./pages/Soup";
import Salad from "./pages/Salad";
import Special from "./pages/Special";
import Dessert from "./pages/Dessert";
import Beverage from "./pages/Beverage";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<LandingPage />} /> 
          {/* Other routes that needs the navbar can be nested here if needed */}
        </Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/rating" element={<Rating />}></Route>
        <Route path="/leave-a-review" element={<LeaveReview />}></Route>
        <Route
          path="/Adminhome/*"
          element={
            <Layout>
              <Routes>
                <Route path="/Dashboard" element={<Dashboard />}></Route>
                <Route path="/Advert" element={<Advert />}></Route>
                <Route path="/Promotions" element={<Promotions />}></Route>
                <Route path="/CreateMenu" element={<CreateMenu />}></Route>
                <Route path="/MenuForm" element={<MenuForm />}></Route>
                <Route
                  path="/Notifications"
                  element={<Notifications />}
                ></Route>
                <Route path="/MainDish" element={<MainDish />}></Route>
                <Route path="/Appetizer" element={<Appetizer />}></Route>
                <Route path="/Side" element={<Side />}></Route>
                <Route path="/Soup" element={<Soup />}></Route>
                <Route path="/Salad" element={<Salad />}></Route>
                <Route path="/Special" element={<Special />}></Route>
                <Route path="/Beverage" element={<Beverage />}></Route>
                <Route path="/Dessert" element={<Dessert />}></Route>
              </Routes>
            </Layout>
          }
        ></Route>

        <Route path="/Sign-up/" element={<SignUpForm />}></Route>
        <Route path="/Sign-in/" element={<SignInForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
