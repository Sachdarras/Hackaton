import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages sans Outlet
import App from "./App";
import Home from "./pages/Home";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterUser from "./pages/RegisterUser";
import Connexion from "./pages/Connexion";

// Pages avec Outlet
import Profil from "./pages/Profil";
import Swipe from "./pages/Swipe";

const router = createBrowserRouter({
  routes: [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/registercompany",
      element: <RegisterCompany />,
    },
    {
      path: "/registeruser",
      element: <RegisterUser />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/profil",
      element: <Profil />,
      children: [
        {
          path: "/swipe",
          element: <Swipe />,
        },
      ],
    },
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
