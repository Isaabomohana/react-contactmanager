import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { brandding } = props;
  return (
    <div>
      <h3 style={HeaderStyling}>{brandding}</h3>
    </div>
  );
};

Header.defaultProps = {
  brandding: "My React App"
};

Header.propTypes = {
  brandding: PropTypes.string.isRequired
};

const HeaderStyling = {
  color: "red",
  fontSize: "50px"
};

export default Header;
