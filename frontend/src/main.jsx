import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MenuProvider } from "./context/MenuContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <MenuProvider>
      <App />
    </MenuProvider>
  
);
