import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavContextProvider from "./context/navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </StrictMode>
);
