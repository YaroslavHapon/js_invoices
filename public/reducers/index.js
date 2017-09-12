import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import invoicesGetReducer from './invoices/get/invoices-reducer'
import invoicesPostReducer from './invoices/post/invoices-post-reducer'
import invoicesPutReducer from './invoices/put/invoices-put-reducer'
import productsGetReducer from './products/get/products-reducer'
import customersGetReducer from './customers/get/customers-reducer'
import currentInvoiceReducer from './invoices/current-invoice-reducer'
import deleteInvoiceReducer from './invoices/delete/invoices-delete-reducer'

const rootReducer = combineReducers({
  form: formReducer,
  invoicesGet: invoicesGetReducer,
  invoicesPost: invoicesPostReducer,
  invoicesPut: invoicesPutReducer,
  invoiceDelete: deleteInvoiceReducer,
  productsGet: productsGetReducer,
  customersGet: customersGetReducer,
  currentInvoice: currentInvoiceReducer
});

export default rootReducer