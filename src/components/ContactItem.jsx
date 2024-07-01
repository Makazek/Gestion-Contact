// src/components/ContactItem.jsx
import React from 'react';
import './ContactItem.css';

const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="contact-item">
      <h3>{contact.nom}</h3>
      <p>Téléphone : {contact.telephone}</p>
      <button onClick={() => onEdit(contact.id)} className="edit-button">Modifier</button>
      <button onClick={() => onDelete(contact.id)} className="delete-button">Supprimer</button>
    </div>
  );
};

export default ContactItem;
