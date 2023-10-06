import "./App.css";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { AddUser, EditUser, Login, SignUp } from "./pages";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </>
  );
};

export default App;
