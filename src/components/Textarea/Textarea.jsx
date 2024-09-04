import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

function Textarea({ backgroundColor, placeholder, label, value, onChange, onSubmit, ...props }) {
  return (
    <form className={styles.commentForm} onSubmit={onSubmit}>
      {label && <strong>{label}</strong>}
      <textarea
        style={{ backgroundColor: backgroundColor || 'var(--grey-900)' }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      <button type="submit">Publish</button>
    </form>
  );
}

Textarea.propTypes = {
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textarea;
