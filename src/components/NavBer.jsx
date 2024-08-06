import React from "react";
import { NavLink } from "react-router-dom";

function NavBer() {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/users/add">Post Users</NavLink>
      </div>
    </div>
  );
}

export default NavBer;
