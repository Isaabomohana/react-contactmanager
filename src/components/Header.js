import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { brandding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-o">
      <div className="container">
        <a href="/" className="navbar-brand">
          {brandding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brandding: "My React App"
};

Header.propTypes = {
  brandding: PropTypes.string.isRequired
};

export default Header;
