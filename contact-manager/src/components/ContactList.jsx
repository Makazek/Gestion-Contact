// src/components/ContactList.jsx
import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
