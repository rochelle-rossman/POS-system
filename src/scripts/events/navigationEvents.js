import signOut from '../helpers/auth/signOut';
import renderRevenue from '../components/showRevenue';
import homePage from '../components/pages/homepage';
import { getOrders } from '../../api/orderData';
import addOrderForm from '../components/forms/createOrderForm';
import viewOrders from '../components/orderCards';
import { getRevenue } from '../../api/revenueData';

const navEvt = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('logout')) {
      signOut();
    }
    if (e.target.id.includes('revLink')) {
      getRevenue().then((array) => renderRevenue(array));
    }
    if (e.target.id.includes('create-order')) {
      addOrderForm();
    }
    if (e.target.id.includes('logo')) {
      homePage();
    }
    if (e.target.id.includes('view-orders')) {
      getOrders().then((array) => viewOrders(array));
    }
  });
};

export default navEvt;
