// src/App.jsx
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('name');
  const contactsPerPage = 3; // Nombre de contacts par page

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now(), dateAdded: new Date() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (id) => {
    const newPhone = prompt("Entrez le nouveau numéro de téléphone :");
    if (!/^\d+$/.test(newPhone)) {
      alert('Veuillez entrer un numéro de téléphone valide.');
      return;
    }
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, telephone: newPhone } : contact
      )
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Réinitialiser à la première page lors de la recherche
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Trier les contacts
  const sortedContacts = filteredContacts.sort((a, b) => {
    if (sortOption === 'name') {
      return a.nom.localeCompare(b.nom);
    } else if (sortOption === 'date') {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
    return 0;
  });

  // Pagination
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = sortedContacts.slice(indexOfFirstContact, indexOfLastContact);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    renderPageNumbers.push(
      <button
        key={i}
        id={i}
        onClick={handleClick}
        className={currentPage === i ? 'active' : ''}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Gestionnaire de Contacts</h1>
      <input
        type="text"
        placeholder="Rechercher des contacts"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="sort-options">
        <label>
          Trier par :
          <select value={sortOption} onChange={handleSortChange}>
            <option value="name">Nom</option>
            <option value="date">Date d'ajout</option>
          </select>
        </label>
      </div>
      <ContactForm addContact={addContact} />
      <ContactList contacts={currentContacts} onDelete={deleteContact} onEdit={editContact} />
      <div className="pagination">
        {renderPageNumbers}
      </div>
    </div>
  );
};

export default App;
