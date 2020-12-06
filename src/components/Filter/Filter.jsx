import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      Фильтр по имени <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.protoTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
