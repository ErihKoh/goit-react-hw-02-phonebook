import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Section from './components/Section';

class App extends Component {
  state = {};

  static propTypes = {};

  render() {
    return (
      <>
        <Section title="Phonebook" />
        <Section title="Contacts" />
      </>
    );
  }
}

export default App;
