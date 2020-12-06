import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactEl from '../ContactEl';

function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactEl element={{ name, number }} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
