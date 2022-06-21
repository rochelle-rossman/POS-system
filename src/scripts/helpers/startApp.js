import domBuilder from '../components/domBuilder';
import renderNav from '../components/navBar';
import navEvt from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import homePage from '../components/pages/homepage';
import fromEvt from '../events/formEvents';
import btnEvt from '../events/buttonEvents';
import showLogo from '../components/logomain';

const startApp = (user) => {
  showLogo();
  domBuilder();
  renderNav();
  navEvt();
  domEvents();
  homePage(user);
  fromEvt();
  btnEvt();
};

export default startApp;
