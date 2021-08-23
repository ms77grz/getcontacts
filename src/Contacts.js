import { useState, useEffect } from 'react';
import { callApi } from './utils';

export default function Contacts() {
  console.log('Contact Renders');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contacts = await callApi('/contacts', 'GET');
      if (contacts) {
        setContacts(contacts);
      }
    };
    getContacts();
  }, []);

  return (
    <div>
      <ul>
        {contacts.length > 0 &&
          contacts.map(contact => <li key={contact.name}>{contact.name}</li>)}
      </ul>
    </div>
  );
}
