import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMenu from "./pages/CreateMenu";
import Dashboard from "./pages/Dashboard";
import Advert from "./pages/Advert";
import Layout from "./components/Layout";
import SignInForm from "./pages/Sign-in/SignIn";
import SignUpForm from "./pages/Sign-up/SignUp";
import MenuForm from "./pages/MenuForm";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Advert" element={<Advert />}></Route>
          <Route path="/Menu" element={<CreateMenu />}></Route>
          <Route path="/Sign-up/" element={<SignUpForm />}></Route>
          <Route path="/Sign-in/" element={<SignInForm />}></Route>
          <Route path="/MenuForm" element={<MenuForm />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
