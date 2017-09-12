import PropTypes from 'prop-types';

export default class Select extends React.Component{
  render () {
    const { children, label, id, inputRef, className, labelClass, selectName, value, selectClass, ...others } = this.props
    return(
      <div className={className}>
        {
          label && (
            <label
              className={labelClass}
              htmlFor={id}
              ref={ node => {this.label = node }}>
              {label}
            </label>
          )
        }
        <select
          {...others}
          className={selectClass}
          value={value || ''}
          name={selectName}
          ref={ node => {this.select = node; if(inputRef) inputRef(node) }}
          id={id}>
          {children}
        </select>
      </div>
    )
  }
}

Select.PropTypes = {
  children: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.any,
  className: PropTypes.string,
  labelClass: PropTypes.string,
  selectName: PropTypes.string
};