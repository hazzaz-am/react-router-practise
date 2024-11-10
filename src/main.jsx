import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Header from "./layout/Header";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/signin",
				element: <Signin />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
