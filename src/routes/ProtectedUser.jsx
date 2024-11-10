import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const ProtectedUser = () => {
	const isSignedin = false;

	return isSignedin ? <Outlet /> : <Signin />;
};
export default ProtectedUser;
