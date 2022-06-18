import signOut from '../helpers/auth/signOut';
import renderRevenue from '../components/showRevenue';
import homePage from '../components/pages/homepage';
import addOrderForm from '../components/forms/createOrderForm';

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
};

export default navEvt;
