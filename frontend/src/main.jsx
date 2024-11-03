import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test_auth from "./Test_auth.jsx";
import Test_landing from "./landing-page/Test_landing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Test_landing />} />
          <Route path="/auth/*" element={<Test_auth/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
