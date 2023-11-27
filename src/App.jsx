import { FiHome } from "react-icons/fi";
import Signin from "./pages/signin/Signin";
import Landing from "./pages/landing/Landing";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import NewPassword from "./pages/forgot-password/NewPassword";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				{/* All other application logic here */}
				<Routes>
					{/* All application routes here */}
					<Route path="/" element={<Landing/>}/>
					<Route path="/signin" element={<Signin/>}/>
					<Route path="/signup" element={<Signup/>}/>
					<Route path="/forgot-password" element={<ForgotPassword/>}/>
					<Route path="/new-password" element={<NewPassword/>}/>
					<Route path="/dashboard" element={<Dashboard/>}/>

				</Routes>
			</BrowserRouter>


















			{/* <BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter> */}
		</>
	);
}

export default App;
