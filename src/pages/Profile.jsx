import { useLocation } from "react-router-dom";

const Profile = () => {
	const { state } = useLocation();
	console.log(location);
	return (
		<div className="profile-container">
			{state ? (
				<>
					<h2>My Profile</h2>
					<div className="profile-info">
						<p className="profile-img">{state.img}</p>
						<p>
							<span className="profile-label">Short Name: {state.name}</span>{" "}
						</p>
						<p>
							<span className="profile-label">Email: {state.email}</span>{" "}
						</p>
						<p>
							<span className="profile-label">City: {state.city}</span>{" "}
						</p>
						<p>
							<span className="profile-label">Country: {state.country}</span>{" "}
						</p>
					</div>
				</>
			) : (
				<p>No Profile Found</p>
			)}
		</div>
	);
};
export default Profile;
