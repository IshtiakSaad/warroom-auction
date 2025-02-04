import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import PlayerSection from "../Pages/Players/PlayerSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>404 Not found</h2>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/players",
            element: <PlayerSection></PlayerSection>
        }
    ]
  },
]);

export default router;
