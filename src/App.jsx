import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notifications />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
