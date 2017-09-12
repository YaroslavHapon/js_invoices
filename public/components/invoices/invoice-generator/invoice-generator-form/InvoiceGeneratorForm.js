import Select from "./../../../controls/select/Select"
import Input from "./../../../controls/input/Input"
import ProductSelectList from "./../products-select/ProductSelectList"
import PropTypes from 'prop-types';

export default class InvoiceGeneratorFormContainer extends React.Component{
  static propTypes = {
    onInvoiceChange: PropTypes.func.isRequired,
    customerValue: PropTypes.string,
    customers: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    products: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    total: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    discount: PropTypes.number.isRequired,
    item: PropTypes.object
  }

  onCustomerChange = (value) => {
    this.props.onInvoiceChange({ customer: { $set: value } });
  }
  
  render () {
    const { customers, customerValue, productsList, products, onInvoiceChange, total, onChangeDiscount, discount } = this.props
    
    return (
      <div>
        <InvoiceGeneratorForm
          customers={customers}
          products={products}
          customerValue={customerValue}
          onCustomerChange={this.onCustomerChange}
          productsList={productsList}
          onInvoiceChange={onInvoiceChange}
          onChangeDiscount={onChangeDiscount}
          discount={discount}
        />
        <div>
          <span><b>Total:</b></span>
          <span>{total}</span>
        </div>
      </div>
    )
  }
}

const InvoiceGeneratorForm = (props) => {
  const customersOptions = props.customers.map((item, i) => {
    return <option key={i} value={item.name}>{item.name}</option>
  });
  return <form>
    <Select
      value={props.customerValue}
      id="customer-select"
      name="customer-select"
      selectClass="form-control"
      onChange={e => props.onCustomerChange(e.target.value)}
      label="Select Customer"
      className="form-group">
      {
        props.customerValue
        ? <option value={props.customerValue}>{props.customerValue}</option>
        : <option value="" disabled>Choose customer</option>
      }
      {customersOptions}
    </Select>
    <div className="form-group">
      <ProductSelectList
        products={props.products}
        productsList={props.productsList}
        productListUpdate={props.productListUpdate}
        onInvoiceChange={props.onInvoiceChange}
      />
    </div>
    <Input
      value={props.discount}
      label="Discount"
      type="number"
      onChange={e => props.onChangeDiscount(e.target.value)}
      placeholder="Change quantity"
      id="quantity-input" />
  </form>
};

InvoiceGeneratorForm.PropTypes = {
  customerValue: PropTypes.string,
  customers: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  productList: PropTypes.array,
  onCustomerChange: PropTypes.func.isRequired,
  onInvoiceChange: PropTypes.func.isRequired,
  discount: PropTypes.number.isRequired,
  onChangeDiscount: PropTypes.func.isRequired
}

