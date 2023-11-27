import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
	return (
		<div>
			<h1>Signin Page</h1>
			<hr />
			<Link to="/dashboard">Signin</Link>
			<hr />
			<Link to="/forgot-password">Forgot Password</Link>
			<hr />
			<Link to="/">Home</Link>
			<hr />
			<Link to="/signup">Signup</Link>
			<hr />
			<div className="input-container">
				<input type="text" placeholder="Username" />
				<FiUser className="input-icon" />
			</div>
		</div>
	);
};

export default Signin;
