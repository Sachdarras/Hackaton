import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter({
  routes: [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
