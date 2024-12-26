import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./auth/sign-in";
import Home from "./Home";
import DashBoard from "./Dashboard";
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
   
    element: <App />,
    children:[
        {
           path:"/",
           element:<Home/>
        },
        {
            path:"/dashboard",
            element:<DashBoard/>
        }
    ]
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);
createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <RouterProvider router={router} />
  </ClerkProvider>
);
