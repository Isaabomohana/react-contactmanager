import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mob: PropTypes.string.isRequired
  };
  render() {
    const { name, email, mob } = this.props;
    return (
      <div>
        <h4>{name} </h4>
        <ul>
          <li>Email: {email}</li>
          <li>Mobile: {mob}</li>
        </ul>
      </div>
    );
  }
}

// you can do this in the class or outside it
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   mob: PropTypes.string.isRequired
// };

export default Contact;
