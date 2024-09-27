import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignInForm from "./pages/Sign-in/SignIn";
import SignUpForm from "./pages/Sign-up/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Sign-up/" element={<SignUpForm />}></Route>
        <Route path="/Sign-in/" element={<SignInForm />}></Route>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
