import signOut from '../helpers/auth/signOut';
import renderRevenue from '../components/showRevenue';
import viewOrders from '../components/orderCards';
// Render Orders using view Orders
const navEvt = () => {
  document.querySelector('#logout')
    .addEventListener('click', signOut);
  document.querySelector('#revLink').addEventListener('click', () => {
    renderRevenue();
  });
  document.querySelector('#logo').addEventListener('click', () => {
    viewOrders();
  });
};

export default navEvt;
