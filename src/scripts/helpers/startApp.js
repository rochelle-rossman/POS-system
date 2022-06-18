// import { getCustomers } from '../../api/customerData';
import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
<<<<<<< HEAD
import homePage from '../components/pages/homepage';
// import { showCustomers } from '../components/pages/customers';
=======
// import { showCustomers } from '../components/pages/customers';
import fromEvt from '../events/formEvents';
>>>>>>> main

const startApp = () => {
  domBuilder();
  renderNav();
  navEvt();
  domEvents();
<<<<<<< HEAD
  homePage();
  // getCustomers().then((customerArray) => showCustomers(customerArray));
=======
  fromEvt();

//  getCustomers().then((customerArray) => showCustomers(customerArray));
>>>>>>> main
};

export default startApp;
