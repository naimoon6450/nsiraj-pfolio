import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li>
            <a
              className="btn btn-light"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </li>
          <li>
            <a
              className="btn btn-light"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="btn btn-light"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
