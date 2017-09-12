import update from 'react-addons-update'
import PropTypes from 'prop-types';
import InvoiceGeneratorForm from "./invoice-generator-form/InvoiceGeneratorForm"

const emptyProduct = { name: "", price: "", quantity: 1 };
const emptyInvoice = { customer: "", products: [emptyProduct], total: 0, discount: 0 };

export default class InvoiceGeneratorContainer extends React.Component{
  static propTypes = {
    postInvoice: PropTypes.func.isRequired,
    putInvoice: PropTypes.func.isRequired,
    invoicesPost: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    customers: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    products: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    addCurrentInvoice: PropTypes.func.isRequired,
    currentInvoice: PropTypes.object
  }

  state = {
    invoice: null,
    discount: 0,
    total: "0.00",
    isAddedInvoice: false
  }

  componentWillReceiveProps(nextProps) {
    // if the invoice hasn't been loaded and not loading now 
    // and it has valid customer and product, send the post to the server
    if(!this.props.invoicesPost.loaded && !nextProps.invoicesPost.loading && !nextProps.invoicesPost.loaded &&
      this.props.currentInvoice && nextProps.currentInvoice.data.customer && nextProps.currentInvoice.data.products[0].name){
      const customerId = this.props.customers.find(x => x.name === nextProps.currentInvoice.data.customer).id;
      const invoiceObject = { customer_id: customerId, total: nextProps.currentInvoice.data.total, discount: nextProps.currentInvoice.data.discount };
      this.props.postInvoice(invoiceObject);
    }
    
    // if invoice was posted, merge the return object from the server with state object
    if(!this.props.invoicesPost.loaded && nextProps.invoicesPost.loaded) {
      const invoice = {...this.state.invoice, ...nextProps.invoicesPost.data};
      this.setState({
        invoice: invoice
      })
    }
    
    // if the invoice has already been loaded and updated, update the invoice on the server
    if(this.props.invoicesPost.loaded && this.props.currentInvoice.data !== nextProps.currentInvoice.data){
      this.props.putInvoice(nextProps.currentInvoice.data.id, nextProps.currentInvoice.data)
    }
  }

  addInvoice = () => {
    if(!this.state.invoice) {
      this.setState({
        invoice: emptyInvoice,
        isAddedInvoice: true
      });
    }
  }

  deleteInvoice = () => {
    if(this.state.invoice) {
      this.setState({
        invoice: null,
        isAddedInvoice: false
      })
    }
  }

  calculateTotal = products => {
    return products.reduce((memo, item) => {
      return memo + (item.price * item.quantity)
    }, 0);
  }

  invoiceChange = updateOption => {
    const invoice = update(this.state.invoice, updateOption);
    const previousTotal = this.calculateTotal(invoice.products).toFixed(2);
    const total = (previousTotal - (previousTotal / 100 * this.state.discount)).toFixed(2);
    this.setState({
      invoice,
      total
    });
    this.props.addCurrentInvoice({ ...invoice, total, discount: this.state.discount });
  }

  onChangeDiscount = discount => {
    const discountInt = parseInt(discount);
    const previousTotal = this.calculateTotal(this.state.invoice.products).toFixed(2);
    const total = (previousTotal - (previousTotal / 100 * discount)).toFixed(2);
    this.setState({
      discount: discountInt,
      total
    });

    this.props.addCurrentInvoice({ ...this.state.invoice, total, discount: discountInt });
  }

  render () {
    const { customers, products } = this.props;
    const {invoice, isAddedInvoice, total, discount } = this.state;

    return(
      <div>
        <InvoiceGenerator
          isAddedInvoice={isAddedInvoice}
          invoice={invoice}
          onInvoiceChange={this.invoiceChange}
          deleteInvoice={this.deleteInvoice}
          addInvoice={this.addInvoice}
          customers={customers}
          products={products}
          total={total}
          discount={discount}
          onChangeDiscount={this.onChangeDiscount}
        />
      </div>
    )
  }
}

const InvoiceGenerator = props => {
  const isEmpty = props.invoice === null;

  return (
    <div>
      <div>
        {!props.isAddedInvoice &&
          <button className="btn btn-sm btn-primary" type="button" onClick={props.addInvoice}>Add new invoice</button>}
        {!isEmpty &&
          <InvoiceGeneratorForm
            onInvoiceChange={props.onInvoiceChange}
            customerValue={props.invoice.customer}
            customers={props.customers}
            productsList={props.invoice.products}
            products={props.products}
            total={props.total}
            discount={props.discount}
            onChangeDiscount={props.onChangeDiscount}
            item={props.invoice} />
        }
        {props.isAddedInvoice &&
          <button className="btn btn-sm btn-primary" type="button" onClick={props.deleteInvoice}>Close invoice form</button>}
      </div>
    </div>
  )
}

InvoiceGenerator.PropTypes = {
  isAddedInvoice: PropTypes.bool.isRequired,
  invoice: PropTypes.object.isRequired,
  onInvoiceChange: PropTypes.func.isRequired,
  deleteInvoice: PropTypes.func.isRequired,
  addInvoice: PropTypes.func.isRequired,
  customers: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  discount: PropTypes.number.isRequired,
  onChangeDiscount: PropTypes.func.isRequired
}

