import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import CreateMenu from "./pages/CreateMenu";
import Dashboard from "./pages/Dashboard";
import Advert from "./pages/Advert";
import Layout from "./components/Layout"
import SignInForm from "./pages/Sign-in/SignIn";
import SignUpForm from "./pages/Sign-up/SignUp";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Adminhome/*" element={<Layout>
          <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/Advert" element={<Advert/>}></Route>
          <Route path="/Menu" element={<CreateMenu/>}></Route>
          </Routes>
        </Layout>}></Route>
        <Route path="/Sign-up/" element={<SignUpForm />}></Route>
        <Route path="/Sign-in/" element={<SignInForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
