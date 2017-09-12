import axios from "axios";
const ROOT_URL = 'http://localhost:8000';

export default class Api {
  static fetchCustomers () {
    return axios.get(`${ROOT_URL}/api/customers`)
    .then(response => {
      return response.data
    })
    .catch(err => {
      let error = err;
      error.message = "Customers fetch failed!";
      throw error;
    });
  }
  
  static fetchInvoices () {
    return axios.get(`${ROOT_URL}/api/invoices`)
    .then(response => {
      return response.data
    })
    .catch(err => {
      let error = err;
      error.message = "Invoices fetch failed!";
      throw error;
    });
  }
  
  static fetchProducts () {
    return axios.get(`${ROOT_URL}/api/products`)
      .then(response => {
        return response.data
      })
      .catch(err => {
        let error = err;
        error.message = "Customers fetch failed!";
        throw error;
      });
  }

  static postInvoice(invoice) {
    return axios.post(`${ROOT_URL}/api/invoices`, invoice)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      let error = err;
      error.message = "Invoice post failed!";
      throw error;
    });
  }

  static putInvoice(id, invoice) {
    return axios.put(`${ROOT_URL}/api/invoices/${id}`, invoice)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        let error = err;
        error.message = "Invoice update failed!";
        throw error;
      });
  }
  static deleteInvoice(id) {
    return axios.delete(`${ROOT_URL}/api/invoices/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        let error = err;
        error.message = "Invoice update failed!";
        throw error;
      });
  }
}
