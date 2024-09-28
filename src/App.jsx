import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMenu from "./pages/CreateMenu";
import Dashboard from "./pages/Dashboard";
import Advert from "./pages/Advert";
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Advert" element={<Advert/>}></Route>
        <Route path="/Menu" element={<CreateMenu/>}></Route>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
