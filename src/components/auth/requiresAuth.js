import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('jwt');
console.log('token = ', token);

axios.defaults.baseURL = 'http://localhost:4000/api';

axios.interceptors.request.use(config => {
  config.headers.authorization = token;
  return config;
}, error => {
  return Promise.reject(error);
});

export default function(Component) {
  return class Authorization extends React.Component {
    render() {
      const notLoggedIn = <div>Please log in to see our users</div>;
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
