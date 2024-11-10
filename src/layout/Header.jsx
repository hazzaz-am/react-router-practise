import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
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
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/signin">Signin</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
			<Toaster />
		</>
	);
};
export default Header;
