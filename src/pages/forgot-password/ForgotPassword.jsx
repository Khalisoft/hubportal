import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<>
			<h1>Forgot Password</h1>
            <hr />
            <Link to="/new-password">Submit</Link>
            <hr />
            <Link to="/signin">Cancel</Link>
		</>
	);
};

export default ForgotPassword;
