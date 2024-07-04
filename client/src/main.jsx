import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages sans Outlet
import Home from "./pages/Home";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterUser from "./pages/RegisterUser";
import Connexion from "./pages/Connexion";
import ProfilEntreprise from "./pages/ProfilEntreprise";

// Pages avec Outlet
import Profil from "./pages/Profil";
import App from "./pages/App";
import Match from "./pages/Match";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/match",
    element: <Match />,
  },
  {
    path: "/profil",
    element: <App />,
    children: [
      {
        path: "",
        element: <Profil />,
      },
      {
        path: "profilentreprise",
        element: <ProfilEntreprise />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
