import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  renderNav();
  navEvt(user.uid);
};

export default startApp;
