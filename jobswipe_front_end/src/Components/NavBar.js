import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

<ul>
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/register">Register</Link>
  </li>

  <li>
    <Link to="/users">Users</Link>
  </li>

  <li>
    <Link to="/likes">Likes</Link>
  </li>

  <li>
    <Link to="/jobs">New Jobs</Link>
  </li>
</ul>


);
export default NavBar;
