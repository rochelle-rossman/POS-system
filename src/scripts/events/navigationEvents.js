import signOut from '../helpers/auth/signOut';
import renderRevenue

const navEvt = () => {
  document.querySelector('#logout')
    .addEventListener('click', signOut);
  document.querySelector('#revLink').addEventListener('click', () => {
    renderRevenue();
  });
  // document.querySelector('#view-orders').addEventListener('click', () => {
  //  getOrders().then((ordersArray) => showOrders(ordersArray));
  // })
};

export default navEvt;
