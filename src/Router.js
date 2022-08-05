import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import CartView from "./routes/CartView";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cartView" element={<CartView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
