import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const homePage = () => {
  clearDom();
  const domString = `

  `;
  renderToDOM('#main-container', domString);
};

export default homePage;
