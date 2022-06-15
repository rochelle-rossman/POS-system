// import getCustomers from '../../api/customerData';
import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
// import { showCustomers } from '../components/pages/customers';

const startApp = () => {
  domBuilder();
  renderNav();

  // getCustomers().then((customerArray) => showCustomers(customerArray));
};

export default startApp;
