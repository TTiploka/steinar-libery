import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import About from "../views/about";
import Book from "../views/book";
import ContactUs from "../views/contact-us";
import Login from "../views/login";
import Privacy from "../views/privacy";
import Register from "../views/register";

const router = createBrowserRouter([
    { path: "/", element: <HomeView/> },
    { path: "/about", element: <About/> },
    { path: "/book", element: <Book/> },
    { path: "/contact-us", element: <ContactUs/> },
    { path: "/login", element: <Login/> },
    { path: "/privacy", element: <Privacy/> },
    { path: "/register", element: <Register/> },
]);

export default router