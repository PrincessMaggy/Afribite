import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMenu from "./pages/CreateMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateMenu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
