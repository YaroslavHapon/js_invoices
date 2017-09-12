import { connect } from "react-redux";
import Invoices from './../components/invoices/Invoices';
import { fetchInvoices } from './../reducers/invoices/get/invoices-actions';
import { addCurrentInvoice } from './../reducers/invoices/current-invoice-actions';
import { postInvoice } from './../reducers/invoices/post/invoices-post-actions';
import { putInvoice } from './../reducers/invoices/put/invoices-put-actions';
import { deleteInvoice } from './../reducers/invoices/delete/invoices-delete-actions'
import { fetchProducts } from './../reducers/products/get/products-actions';
import { fetchCustomers } from './../reducers/customers/get/customers-actions';

const mapStateToProps = state => ({
  invoicesGet: state.invoicesGet,
  invoicesPost: state.invoicesPost,
  productsGet: state.productsGet,
  customersGet: state.customersGet,
  currentInvoice: state.currentInvoice
});

const mapDispatchToProps = dispatch => ({
  fetchInvoices: () => dispatch(fetchInvoices()),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCustomers: () => dispatch(fetchCustomers()),
  postInvoice: (invoice) => dispatch(postInvoice(invoice)),
  addCurrentInvoice: (invoice) => dispatch(addCurrentInvoice(invoice)),
  putInvoice: (id, invoice) => dispatch(putInvoice(id, invoice)),
  deleteInvoice: (id) => dispatch(deleteInvoice(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Invoices)