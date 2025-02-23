import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers/router";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Auth0Provider
    domain="dev-5lcm3yzhrjudfy4w.us.auth0.com"
    clientId="lHKz4yV7CnBJOsIpSaSE4A1dXYvNsOt3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);
