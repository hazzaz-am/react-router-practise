import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const ProtectedAdmin = () => {
	const isLoggedIn = true;
	const isAdmin = true;

	return isLoggedIn && isAdmin ? <Outlet /> : <Signin />;
};
export default ProtectedAdmin;
