import "./signup.css";
import plane from "./../../assets/plane.png";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<div className="wrapper">
			<aside className="login-image">
				<section>
					<h1>Katsina Tech Hub</h1>
					<p>Where technology matters</p>
				</section>
			</aside>
			<aside className="login-form">
				<section className="plane">
					<img src={plane} alt="" />
				</section>
				<section className="welcome">
					<h1>Welcome</h1>
					<p>Signup</p>
				</section>
				<section className="form">
					<div>
						<div>
							<input type="text" name="" id="" />
						</div>
						<div>
							<input type="password" name="" id="" />
						</div>
						<div>
							<a href="">Forgot password?</a>
						</div>
					</div>
				</section>
				<section className="icons">
					<div>
						<FiHome />
					</div>

					<div>
						<FiHome />
					</div>

					<div>
						<FiHome />
					</div>
				</section>
				<section>Monastry</section>
				
				<Link to="/login">Login</Link>

			</aside>
		</div>
	);
};

export default Signup;
