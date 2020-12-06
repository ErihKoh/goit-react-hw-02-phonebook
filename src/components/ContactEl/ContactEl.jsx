import s from './ContactEl.module.css';

function ContactEl({ contact }) {
  return (
    <>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
    </>
  );
}

export default ContactEl;
