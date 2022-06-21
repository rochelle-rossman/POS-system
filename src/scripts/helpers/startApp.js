import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import homePage from '../components/pages/homepage';
<<<<<<< HEAD
// import { showCustomers } from '../components/pages/customers';
// import { showCustomers } from '../components/pages/customers';
=======
>>>>>>> main
import fromEvt from '../events/formEvents';
import btnEvt from '../events/buttonEvents';

const startApp = (user) => {
  domBuilder();
  renderNav();
  navEvt();
  domEvents();
<<<<<<< HEAD
  homePage();
  // getCustomers().then((customerArray) => showCustomers(customerArray));
=======
  homePage(user);
>>>>>>> main
  fromEvt();
  btnEvt();
};

export default startApp;
