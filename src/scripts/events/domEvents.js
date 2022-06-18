import { deleteCustomer, getCustomers } from '../../api/customerData';
import { deleteOrders, getOrders, getSingleOrder } from '../../api/orderData';
import orderDetail from '../../api/mergedData';
import viewOrders from '../components/orderCards';
import addOrderForm from '../components/forms/createOrderForm';
// import viewOrder from '../components/viewOrderDetails';
import { showCustomers } from '../components/pages/customers';

// Customer card events
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-customer-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCustomer(firebaseKey).then(() => {
        getCustomers().then((customerArray) => {
          showCustomers(customerArray);
        });
      });
    }
    // orderCardEvents
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrders(firebaseKey).then(() => {
        getOrders().then((ordersArray) => {
          viewOrders(ordersArray);
        });
      });
    }
    if (e.target.id.includes('view-orderdetails-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      orderDetail(firebaseKey).then();
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => addOrderForm(orderObject));
    }
  });
};

export default domEvents;
