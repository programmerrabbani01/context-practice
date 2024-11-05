import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UtilityContextProvider from "./provider/UtilityContextProvider.jsx";
import AuthContextProvider from "./provider/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UtilityContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UtilityContextProvider>
  </StrictMode>
);
