import { getCustomers } from '../../api/customerData';
import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import { showCustomers } from '../components/pages/customers';

const startApp = (user) => {
  domBuilder();
  renderNav();
  navEvt(user.uid);
  domEvents();

  getCustomers().then((customerArray) => showCustomers(customerArray));
};

export default startApp;
