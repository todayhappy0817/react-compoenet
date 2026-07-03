import { createBrowserRouter } from "react-router-dom";
import App from "@/pages/App";
import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";
import LoginPage from "@/pages/loginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage />, handle: { title: "MAIN" } },
      {
        path: "about",
        element: <AboutPage />,
        handle: { title: "ABOUT" },
      },
      {
        path : "login",
        element : <LoginPage />,
      },
    ],
  },
]);


