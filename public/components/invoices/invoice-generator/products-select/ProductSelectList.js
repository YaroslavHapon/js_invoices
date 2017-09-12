import PropTypes from 'prop-types';
import ProductItem from './product-item/ProductItem'

const emptyProduct = { name: "", price: "", quantity: 1 }

export default class ProductSelectList extends React.Component{
  static propTypes = {
    productsList: PropTypes.array,
    productListUpdate: PropTypes.func,
    onInvoiceChange: PropTypes.func,
    products: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  }

  state = {
    isValid: false
  }

  addNewItem = () => {
    this.props.onInvoiceChange({products: { $push: [emptyProduct] }});
  }

  deleteItem = i => {
    this.props.onInvoiceChange({products: { $splice: [[[i], 1]] }});

  }

  onChangeProduct = (i, e) => {
    const productObject = this.props.products.find(x => x.name === e.target.value);
    this.props.onInvoiceChange({ products: {[i]: {$merge: productObject }}});
  }

  onChangeQuantity = (i, e) => {
    this.props.onInvoiceChange({ products: {[i]: {quantity: {$set: e.target.value }}}});
  }

  render () {
    return(
      <div>
        <h4>Products</h4>
        {this.props.productsList.map((item, i) => {
          return <ProductItem
                    products={this.props.products}
                    productChange={(e) => this.onChangeProduct(i, e)}
                    onChangeQuantity={(e) => this.onChangeQuantity(i, e)}
                    key={i}
                    deleteItem={(e) => this.deleteItem(i)}
                    product={item} />
          })
        }
        <button type="button" className="btn btn-warning btn btn-sm" onClick={this.addNewItem}>Add new product</button>
      </div>
    )
  }
}