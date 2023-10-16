import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import About from "../views/about";

const router = createBrowserRouter([
    { path: "/", element: <HomeView/> },
    { path: "/about", element: <About/> },
]);

export default router