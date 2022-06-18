// import { getCustomers } from '../../api/customerData';
import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
// import { showCustomers } from '../components/pages/customers';
import fromEvt from '../events/formEvents';
import btnEvt from '../events/buttonEvents';

const startApp = () => {
  domBuilder();
  renderNav();
  navEvt();
  domEvents();
  fromEvt();
  btnEvt();

//  getCustomers().then((customerArray) => showCustomers(customerArray));
};

export default startApp;
