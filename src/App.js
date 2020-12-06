import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import contacts from './components/ContactList/contacts';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  // функция для получения данных из формы и добавдение в контакты

  addContact = data => {
    const { contacts } = this.state;

    for (let contact of contacts) {
      if (data.name === contact.name) {
        alert(`${data.name} is already in contact`);
        return;
      } else {
        this.setState(({ contacts }) => ({
          contacts: [data, ...contacts],
        }));
      }
    }
  };

  // функция для удаления контактов

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  //  функция фильтрации контактов по имени

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const { contacts } = this.state;
    const filterContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filterContact}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
