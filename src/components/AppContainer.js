/* tslint:disable */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "utils/AuthProvider";

function AppContainer({ children, ...rest }) {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "") || "home";
  const className = "AppContainer page-" + pageName;

  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
      <AuthProvider>
        <div className={className} {...rest}>
          {children}
        </div>
      </AuthProvider>
    </ToastProvider>
  );
}

export default AppContainer;
