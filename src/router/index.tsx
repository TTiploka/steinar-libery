import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import About from "../views/About";
import Book from "../views/Book";
import ContactUs from "../views/ContactUs";
import Login from "../views/Login";
import Privacy from "../views/Privacy";
import Register from "../views/Register";

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