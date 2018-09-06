import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Samo",
          email: "samo@sam.sam",
          mob: "123-123-4444"
        },
        {
          id: 2,
          name: "Samosom",
          email: "samosom@sam.sam",
          mob: "123-123-5555"
        },
        {
          id: 3,
          name: "Samsomah",
          email: "mah@sam.sam",
          mob: "123-123-6666"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <div className="card card-body mb-3">
            <h4>{contact.name} </h4>
            <ul className="list-group">
              <li className="list-group-item">Id: {contact.id}</li>
              <li className="list-group-item">Email: {contact.email}</li>
              <li className="list-group-item">Mobile: {contact.mob}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Contacts;
