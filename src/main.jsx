import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Header from "./layout/Header";
import Signin from "./pages/Signin";
// import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import ErrorPage from "./pages/NotFound";
import UserProfile from "./components/users/UserProfile";
import ProtectedUser from "./routes/ProtectedUser";
import UserOrders from "./components/users/UserOrders";
import ProtectedAdmin from "./routes/ProtectedAdmin";
import Profile from "./components/admin/Profile";
import Orders from "./components/admin/Orders";
import ManageUsers from "./components/admin/ManageUsers";
import Categories from "./components/admin/Categories";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Products />,
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
				path: "/products/:productId",
				// element: <ProductDetails />,
				element: <ProductInfo />,
			},
			{
				path: "/signin",
				element: <Signin />,
			},
			{
				path: "/signout",
				element: <Signin />,
			},
			{
				path: "/dashboard/user",
				element: <ProtectedUser />,
				children: [
					{
						path: "profile",
						element: <UserProfile />,
					},
					{
						path: "orders",
						element: <UserOrders />,
					},
				],
			},
			{
				path: "/dashboard/admin",
				element: <ProtectedAdmin />,
				children: [
					{
						path: "profile",
						element: <Profile />,
					},
					{
						path: "orders",
						element: <Orders />,
					},
					{
						path: "manage-users",
						element: <ManageUsers />,
					},
					{
						path: "categories",
						element: <Categories />,
					},
				],
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
