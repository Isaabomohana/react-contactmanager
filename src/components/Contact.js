import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  static propTypes = {
    contact: PropTypes.object.isRequired
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}{" "}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {/* we use ? : as if/else */}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Mobile: {contact.mob}</li>
          </ul>
        ) : null}
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
