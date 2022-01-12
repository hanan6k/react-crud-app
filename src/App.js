import "./App.css";
import {Switch, Route} from "react-router-dom";
import AddUser from "./pages/usersData/AddUser";
import EditUser from "./pages/usersData/EditUser";
import {Table} from "./pages/usersData/Table";
import Home from "./pages/Home";
import {Login} from "./pages/usersAuthentication/Login";
import {SignUp} from "./pages/usersAuthentication/SignUp";
import Dashboard from "./pages/Dashboard";
const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/table' component={Table} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/addUser' component={AddUser} />
				<Route exact path='/editUser/:id' component={EditUser} />
			</Switch>
		</div>
	);
};

export default App;
