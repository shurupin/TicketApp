import axios from 'axios';
import { applyPagination } from '../../utils/apply-pagination';
import { applySort } from '../../utils/apply-sort';
import { deepCopy } from '../../utils/deep-copy';
import { ticketProduct, emails, invoices, logs } from './data';

class TicketProductsApi {
  async getTicketProducts(request = {}) {
    const { filters, page, rowsPerPage, sortBy, sortDir } = request;

    const response = await axios.get('/Product');
    let data = response.data;
    let count = Number(response.headers.count);

    if (typeof filters !== 'undefined') {
      data = data.filter((ticketProduct) => {
        if (typeof filters.query !== 'undefined' && filters.query !== '') {
          let queryMatched = false;
          const properties = ['category', 'name'];

          properties.forEach((property) => {
            if (ticketProduct[property].toLowerCase().includes(filters.query.toLowerCase())) {
              queryMatched = true;
            }
          });

          if (!queryMatched) {
            return false;
          }
        }

        if (typeof filters.hasAcceptedMarketing !== 'undefined') {
          if (ticketProduct.hasAcceptedMarketing !== filters.hasAcceptedMarketing) {
            return false;
          }
        }

        if (typeof filters.isProspect !== 'undefined') {
          if (ticketProduct.isProspect !== filters.isProspect) {
            return false;
          }
        }

        if (typeof filters.isReturning !== 'undefined') {
          if (ticketProduct.isReturning !== filters.isReturning) {
            return false;
          }
        }

        return true;
      });
      count = data.length;
    }

    if (typeof sortBy !== 'undefined' && typeof sortDir !== 'undefined') {
      data = applySort(data, sortBy, sortDir);
    }

    if (typeof page !== 'undefined' && typeof rowsPerPage !== 'undefined') {
      data = applyPagination(data, page, rowsPerPage);
    }

    return Promise.resolve({
      data,
      count,
    });
  }

  async getTicketProduct(ticketProductId) {
    const { data } = await axios.get(`/Product/${ticketProductId}`);
    return data;
  }

  async updateTicketProduct(ticketProduct) {
    const { data } = await axios.put('/Product', ticketProduct);
    return data;
  }

  getEmails(request) {
    return Promise.resolve(deepCopy(emails));
  }

  getInvoices(request) {
    return Promise.resolve(deepCopy(invoices));
  }

  getLogs(request) {
    return Promise.resolve(deepCopy(logs));
  }
}

export const ticketProductsApi = new TicketProductsApi();
