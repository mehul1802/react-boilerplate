import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // check your authentication here.
  // For example : cookied.get(), localStorage.get() etc...
  // set isLogin -> true/false
  let isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
