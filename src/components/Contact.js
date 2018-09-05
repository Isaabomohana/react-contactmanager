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
      <div className="card card-body mb-3">
        <h4>{name} </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Mobile: {mob}</li>
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
