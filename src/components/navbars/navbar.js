import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () =>
  <nav>
    <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/search"> Search Reviews </Link> </li>
      <li> <Link to="/review"> Create a Review </Link> </li>
      <li> <Link to="/profile"> Profile </Link> </li>
    </ul>
  </nav>

  export default NavBar;
