import { deleteCustomer, getCustomers } from '../../api/customerData';
import { deleteOrders, getOrders, getSingleOrder } from '../../api/orderData';
import viewOrders from '../components/orderCards';
import addOrderForm from '../components/forms/createOrderForm';
import orderDetail from '../../api/mergedData';
import { showCustomers } from '../components/pages/customers';
import viewOrder from '../components/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';
import { getSingleItem } from '../../api/menuData';

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
      orderDetail(firebaseKey).then((itemOrderObject) => viewOrder(itemOrderObject));
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => addOrderForm(orderObject));
    }
    if (e.taerget.id.includes('edit-item')) {
      const [, firebasekey] = e.target.id.split('--');
      getSingleItem(firebasekey).then((itemObject) => addItemForm(itemObject));
    }
  });
};

export default domEvents;
