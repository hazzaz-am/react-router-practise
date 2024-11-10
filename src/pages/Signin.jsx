import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const [filedValue, setFiledValue] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleFiledValue = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;

		setFiledValue({
			...filedValue,
			[name]: value,
		});
	};

	const handleSigninInformation = (event) => {
		event.preventDefault();

		if (filedValue.email === "" || filedValue.password === "") {
			toast.error("Invalid Email and Password");
		} else {
			const firstLetter = filedValue.email[0];
			const secondLetter = filedValue.email[1];
			const cutomImg = firstLetter + secondLetter;
			toast.success("Successfully logged in");
			navigate("/user-profile", {
				state: {
					name: filedValue.email.slice(0, 4),
					email: filedValue.email,
					city: "Add Your City",
					country: "Bangladesh",
					img: cutomImg,
				},
			});
		}
	};

	return (
		<div className="signin-container">
			<h2>Sign In</h2>
			<form onSubmit={handleSigninInformation} className="signin-form">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your Email"
					onChange={handleFiledValue}
					value={filedValue.email}
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter your Password"
					onChange={handleFiledValue}
					value={filedValue.password}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default Signin;
