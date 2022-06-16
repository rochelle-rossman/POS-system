import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import revEvent from '../events/revEvent';

const startApp = () => {
  domBuilder();
  renderNav();
  revEvent();
};

export default startApp;
