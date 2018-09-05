import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { brandding } = props;
  return (
    <div>
      <h3>{brandding}</h3>
    </div>
  );
};

Header.defaultProps = {
  brandding: "my React App"
};

Header.propTypes = {
  brandding: PropTypes.string.isRequired
};

export default Header;
