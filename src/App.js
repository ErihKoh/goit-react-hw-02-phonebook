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

  static propTypes = {};

  // функция для получения данных из формы и добавдение в контакты

  addContact = data => {
    // const phonebookMurkup = [];
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
    // console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();

    const filterEl = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    console.log(filterEl);
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList contacts={filterEl} />
        </Section>
      </>
    );
  }
}

export default App;
