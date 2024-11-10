import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const userData =
			localStorage.getItem("userData") &&
			JSON.parse(localStorage.getItem("userData"));

		setIsLoggedIn(userData?.isLoggedIn);
	}, []);

	const handleSignOut = () => {
		setIsLoggedIn(false);
		localStorage.setItem(isLoggedIn, JSON.stringify(true));
	};

	return (
		<>
			<header className="navbar">
				<div className="navbar__brand">
					<Link to="/">React Router</Link>
				</div>

				<nav className="navbar__links">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						{isLoggedIn && (
							<li>
								<Link to="/signout" onClick={handleSignOut}>
									Signout
								</Link>
							</li>
						)}
						{!isLoggedIn && (
							<li>
								<Link to="/signin">Signin</Link>
							</li>
						)}
					</ul>
				</nav>
			</header>
			<Outlet />
			<Toaster />
		</>
	);
};
export default Header;
