import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root")); // Asegúrate de que haya un elemento con id 'root' en tu HTML
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
