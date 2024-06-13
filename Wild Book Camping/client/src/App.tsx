import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./view/common/DefaultLayout";
import {LogIn} from "./view/Account/LogIn";
import {Register} from "./view/Account/Register";
import AdminLogin from "./view/Pages/Admin/AdminLogin";
import AdminLayout from "./view/common/AdminLayout";
import AdminDashboard from "./view/Pages/Admin/admin-dashboard.page";
import AdminProduct from "./view/Pages/Admin/admin-products.page";
import AdminAddProduct from "./view/Pages/Admin/admin-add-product.page";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={DefaultLayout}></Route>

          <Route path = "/login" Component={LogIn}></Route>
          <Route path="/register" Component={Register}></Route>

          <Route path="/adminlogin" Component={AdminLogin}></Route>
          <Route path="/admin" Component={AdminLayout}></Route>
          <Route path="/adminDashboard" Component={AdminDashboard}></Route>
          <Route path="/adminProducts" Component={AdminProduct}></Route>
          <Route path="/adminProducts/add" Component={AdminAddProduct}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
