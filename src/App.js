import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
// import contacts from './components/ContactList/contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {};

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts" />
      </>
    );
  }
}

export default App;
