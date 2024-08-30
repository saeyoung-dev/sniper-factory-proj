import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";

import router from "./router/index.tsx";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>SomethingError</h1>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
