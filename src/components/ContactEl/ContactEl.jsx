import s from './ContactEl.module.css';
import PropTypes from 'prop-types';
function ContactEl({ element }) {
  return (
    <>
      <span>{element.name}: </span>
      <span>{element.number}</span>
    </>
  );
}

export default ContactEl;
