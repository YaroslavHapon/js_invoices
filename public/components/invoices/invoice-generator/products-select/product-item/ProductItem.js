import PropTypes from 'prop-types';
import classes from "./ProductItem.scss"
import Input from "./../../../../controls/input/Input"
import Select from "./../../../../controls/select/Select"

const ProductItem = (props) => {
  const productOptions = props.products.map((item, i) => {
    return <option key={i} value={item.name}>{item.name}</option>
  });

  return (
    <div className="form-inline">
      <Select
        labelClass={classes.labelClass}
        value={props.product.name}
        label="Select Product"
        onChange={props.productChange}
        selectClass="form-control"
        className="form-group">
        {
          props.product.name
            ? <option value={props.product.name}>{props.product.name}</option>
            : <option disabled value="">Choose product</option>
        }
        {productOptions}
      </Select>
      <div><b>Price:</b> {props.product.price}</div>
      <Input
        value={props.product.quantity}
        label="Quantity"
        type="text"
        onChange={props.onChangeQuantity}
        placeholder="Change quantity"
        id="quantity-input" />
      <div className="form-group">
        <button type="button" className={classes.deleteIcon} onClick={props.deleteItem}>🗑</button>
      </div>
    </div>
  )
}
ProductItem.PropTypes = {
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  productChange: PropTypes.func,
  onChangeQuantity: PropTypes.func,
  deleteItem: PropTypes.func,
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  })
}
export default ProductItem