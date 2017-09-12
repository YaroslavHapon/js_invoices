import App from './../components/App';
import { Route, IndexRoute } from 'react-router'
import Customers from './../components/customers/Customers'
import InvoicesContainer from './../containers/InvoicesContainer'
import Products from './../components/products/Products'
import Invoices from './../components/invoices/InvoicesList'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={InvoicesContainer} />
    <Route path="/products" component={Products} />
    <Route path="/customers" component={Customers} />
    <Route path="/invoices" component={Invoices} />
  </Route>
);
export default routes