import PropTypes from 'prop-types';

const Input = ({label, id, type, placeholder, ...others}) => {
  return(
    <div className="form-group">
      {label &&
        <label htmlFor={id}>{label}</label>
      }
      <input
        id={id}
        {...others}
        className="form-control"
        type={type}
        placeholder={placeholder} />
    </div>
  )
}

Input.PropTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input