import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {};

  // функция для получения данных из формы и добавдение в контакты

  addContact = data => {
    // const phonebookMurkup = [];
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  // createPhonebookMurkup = () => {
  //   const phonebookMurkup = [...this.state.contacts];
  //   phonebookMurkup.push(this.handleFormSubmit());
  //   console.log(phonebookMurkup);
  // };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactList />
        </Section>
      </>
    );
  }
}

export default App;
