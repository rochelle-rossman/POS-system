import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation" class="nav"></div>
  <div id="view"></div>
  <div id="main-container" class="main">
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
