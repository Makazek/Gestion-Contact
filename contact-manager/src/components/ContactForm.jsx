// src/components/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ addContact }) => {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(telephone)) {
      alert('Veuillez entrer un numéro de téléphone valide.');
      return;
    }
    addContact({ nom, telephone });
    setNom('');
    setTelephone('');
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTelephone(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={telephone}
        onChange={handleTelephoneChange}
        className="input-field"
        required
        pattern="\d*"
        title="Veuillez entrer un numéro de téléphone valide."
      />
      <button type="submit" className="submit-button">Ajouter Contact</button>
    </form>
  );
};

export default ContactForm;
