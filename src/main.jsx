import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DisplayContextProvider from "./context/display.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DisplayContextProvider>
      <App />
    </DisplayContextProvider>
  </StrictMode>
);
