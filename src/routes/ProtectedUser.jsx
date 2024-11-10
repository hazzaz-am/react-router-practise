import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const ProtectedUser = () => {
	const userData =
		localStorage.getItem("userData") &&
		JSON.parse(localStorage.getItem("userData"));

	return userData?.isLoggedIn ? <Outlet /> : <Signin />;
};
export default ProtectedUser;
