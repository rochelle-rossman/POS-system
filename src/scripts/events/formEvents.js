import {
  createOrder,
  updateOrder
} from '../../api/orderData';
import viewOrders from '../components/orderCards';

const fromEvt = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        callIn: document.querySelector('#call-in').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        orderName: document.querySelector('#order-name').value,
        date: new Date().toLocaleString(),
        isOpen: document.querySelector('#is-open').value
      };
      createOrder(orderObject).then((ordersArray) => viewOrders(ordersArray));
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        callIn: document.querySelector('#call-in').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        orderName: document.querySelector('#order-name').value,
        isOpen: document.querySelector('#is-open').value,
        firebaseKey
      };

      updateOrder(orderObject).then(viewOrders);
    }
  });
};
export default fromEvt;
