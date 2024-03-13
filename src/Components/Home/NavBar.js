import React from 'react';

const NavBar = () => (
  <>
    <nav className="nav d-flex justify-content-between">
      <ul className="">
        <li>
          <a className="nav-link active" aria-current="page" href="#">Gladwin</a>
        </li>
      </ul>

      <ul className=" d-flex flex-row pe-5">
        <li>
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li>
          <a className="nav-link" href="#">About</a>
        </li>
        <li>
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </>
);

export default NavBar;
