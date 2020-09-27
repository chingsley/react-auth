import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import UserList from './components/users/UserList';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList}></Route>
          <Route path="/login" component={Login}></Route>
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(App);
