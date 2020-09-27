import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class UserList extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    const endpoint = "/users";
    axios.get(endpoint).then(res => {
      console.log(res);
      this.setState(() => ({ users: res.data }));
    }).catch(error => {
      console.error('error.response = ', error.response);
    })
  }

  render() {
    return (
      <>
        <h2> Our Users </h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default requiresAuth(UserList);
