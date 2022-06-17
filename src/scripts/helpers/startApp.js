import { getCustomers } from '../../api/customerData';
import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
<<<<<<< HEAD
import navEvt from '../events/navigationEvents';
=======
import revEvent from '../events/revEvent';
import { showCustomers } from '../components/pages/customers';
>>>>>>> main
import domEvents from '../events/domEvents';
import { showCustomers } from '../components/pages/customers';

const startApp = (user) => {
  domBuilder();
  renderNav();
<<<<<<< HEAD
  navEvt(user.uid);
=======
  revEvent();
>>>>>>> main
  domEvents();

  getCustomers().then((customerArray) => showCustomers(customerArray));
};

export default startApp;
