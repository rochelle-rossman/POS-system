import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import homePage from '../components/pages/homepage';
// import { showCustomers } from '../components/pages/customers';
// import { showCustomers } from '../components/pages/customers';
import fromEvt from '../events/formEvents';
import btnEvt from '../events/buttonEvents';

const startApp = () => {
  domBuilder();
  renderNav();
  navEvt();
  domEvents();
  homePage();
  // getCustomers().then((customerArray) => showCustomers(customerArray));
  fromEvt();
  btnEvt();

//  getCustomers().then((customerArray) => showCustomers(customerArray));
};

export default startApp;
