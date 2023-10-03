import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="App-header">
    <ul className="container">
      <li>Site Title</li>
      <li key="home"></li>
      <li>
        <Link to="/">My Site</Link>
      </li>
      <li>
        <Link to="/new">New Post</Link>
      </li>
    </ul>
  </header>
);
export default Header;
