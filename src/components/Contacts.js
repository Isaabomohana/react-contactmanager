import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
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
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            mob={contact.mob}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
