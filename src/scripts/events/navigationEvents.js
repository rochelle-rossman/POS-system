import signOut from '../helpers/auth/signOut';
import renderRevenue from '../components/showRevenue';
import homePage from '../components/pages/homepage';
import { getOrders } from '../../api/orderData';
import addOrderForm from '../components/forms/createOrderForm';
import viewOrders from '../components/orderCards';

const navEvt = () => {
  document.querySelector('#logout')
    .addEventListener('click', signOut);
  document.querySelector('#revLink').addEventListener('click', () => {
    renderRevenue();
  });
  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm();
  });
  document.querySelector('#logo').addEventListener('click', () => {
    homePage();
  });
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then((array) => viewOrders(array));
  });
};
export default navEvt;
