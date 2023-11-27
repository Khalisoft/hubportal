import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState } from "react"

const Dashboard = () => {
 const [name, setName] = useState("")
 const [phoneNumber, setPhoneNumber] = useState("")
 const [email, setEmail] = useState("")
 const [username, setUserName] = useState("")
 const [password, setPassword] = useState("")
	return (
		<div className="parent-body">
			<section className="left-section">
				<div className="top-logo">
					<img
						className="logo"
						src="https://prime-biller-a.vercel.app/assets/lock-up-trans-46ec29ac.png"
						alt=""
					/>
				</div>
				<div className="links">
					<Link to="/dashboard" className="link">
						Dashboard
					</Link>
					<Link to="/dashboard" className="link">
						Customers
					</Link>
					<Link to="/dashboard" className="link">
						Invoices
					</Link>
					<Link to="/dashboard" className="link">
						Payments
					</Link>
					<Link to="/dashboard" className="link">
						Settings
					</Link>
				</div>
			</section>
			<section className="right-section">
				<aside className="form-aside">
					<input type="text" placeholder="Full name" onChange={(e)=>setName(e.target.value)} />
					<input type="text" placeholder="Phone number" onChange={(e)=>setPhoneNumber(e.target.value)} />
					<input type="text" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} />
					<input type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} />
					<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
					<div className="button-div">
						<button>Update</button>
					</div>
				</aside>
				<aside className="profile-aside">
					<section className="profile-item">
						<label>Name</label>
						<p>{name?name:"Not set"}</p>
					</section>
					<section className="profile-item">
						<label>Phone number</label>
						<p>{phoneNumber?phoneNumber:"Not set"}</p>
					</section>
					<section className="profile-item">
						<label>Email Address</label>
						<p>{email?email:"Not set"}</p>
					</section>
					<section className="profile-item">
						<label>Username</label>
						<p>{username?"@"+username:"Not set"}</p>
					</section>
					<section className="profile-item">
						<label>Password</label>
						<p>{password?"Set" : "Not set"}</p>
					</section>
				</aside>
			</section>
		</div>
	);
};

export default Dashboard;

// {/* <h1>

// Dashboard
// </h1>
// <hr />
// <Link to="/signin">Signout</Link> */}
