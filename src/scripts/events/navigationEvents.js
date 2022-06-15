import signOut from '../helpers/auth/signOut';

const navEvt = () => {
  document.querySelector('#logout')
    .addEventListener('click', signOut);
  // document.querySelector('#view-orders').addEventListener('click', () => {
  //  getOrders().then((ordersArray) => showOrders(ordersArray));
  // })
};

export default navEvt;
