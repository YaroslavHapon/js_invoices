import PropTypes from 'prop-types';
import classes from "./Invoices.scss"
import InvoiceGeneratorContainer from "./invoice-generator/InvoiceGenerator";

export default class Invoices extends React.Component{
  static propTypes = {
    invoicesGet: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
      data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
      ]),
      error: PropTypes.object
    }),
    customersGet: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
      data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
      ]),
      error: PropTypes.object
    }),
    productsGet: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
      data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
      ]),
      error: PropTypes.object
    }),
    invoicesPost: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
      data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
      ]),
      error: PropTypes.object
    }),
    postInvoice: PropTypes.func.isRequired,
    putInvoice: PropTypes.func.isRequired,
    deleteInvoice: PropTypes.func.isRequired,
    addCurrentInvoice: PropTypes.func.isRequired,
    currentInvoice: PropTypes.object
  }

  componentWillMount () {
    if(!this.props.invoicesGet.loaded && !this.props.invoicesGet.loading) {
      this.props.fetchInvoices();
    }
    if(!this.props.customersGet.loaded && !this.props.customersGet.loading) {
      this.props.fetchCustomers();
    }
    if(!this.props.productsGet.loaded && !this.props.productsGet.loading) {
      this.props.fetchProducts();
    }
  }

  render () {
    if(this.props.invoicesGet.error){
      return <div>{this.props.invoicesGet.error.message}</div>
    }
    if(this.props.customersGet.error){
      return <div>{this.props.customersGet.error.message}</div>
    }

    if(!this.props.invoicesGet.loaded || !this.props.customersGet.loaded || !this.props.productsGet.loaded) {
      return <h1>Loading...</h1>
    }

    const { customersGet, productsGet, invoicesPost, postInvoice,
      putInvoice, invoicesGet, addCurrentInvoice, currentInvoice, deleteInvoice } = this.props
    return <div>
      <div>
        <h4>List of invoices</h4>
      </div>
      {!this.props.invoicesGet.data.length ?
        <div>Create new invoice</div>
        : <LoadedInvoices 
            invoices={invoicesGet}
            deleteInvoice={deleteInvoice}/>
      }
      <InvoiceGeneratorContainer
        customers={customersGet.data}
        products={productsGet.data}
        invoicesPost={invoicesPost}
        postInvoice={postInvoice}
        putInvoice={putInvoice}
        addCurrentInvoice={addCurrentInvoice}
        currentInvoice={currentInvoice}
      />
    </div>
  }
}

const LoadedInvoices = ({ invoices, deleteInvoice }) => {
  return (
    <table className="table table-bordered">
      <thead>
      <tr>
        <th>Id</th>
        <th>Customer Id</th>
        <th>Discount</th>
        <th>Total</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {invoices.data.map((item, i) => {
          return <tr key={i}>
            <td>{item.id}</td>
            <td>{item.customer_id}</td>
            <td>{item.discount}</td>
            <td>{item.total}</td>
            <td className={classes.deleteIcon}
                onClick={e => deleteInvoice(item.id)}>🗑</td>
          </tr>
        })
      }
      </tbody>
    </table>
  )
}

LoadedInvoices.PropTypes = {
  invoices: PropTypes.shape({
    id: PropTypes.number,
    customer_id: PropTypes.number,
    discount: PropTypes.number,
    total: PropTypes.number
  }),
  deleteInvoice: PropTypes.func.isRequried
}