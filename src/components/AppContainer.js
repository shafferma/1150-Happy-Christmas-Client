/* tslint:disable */
import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "utils/AuthProvider";
import { DataRefreshProvider } from "utils/DataRefreshProvider";

function AppContainer({ children, ...rest }) {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "") || "home";
  const className = "AppContainer page-" + pageName;

  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
      <DataRefreshProvider>
        <AuthProvider>
          <div className={className} {...rest}>
            {children}
          </div>
        </AuthProvider>
      </DataRefreshProvider>
    </ToastProvider>
  );
}

export default AppContainer;
