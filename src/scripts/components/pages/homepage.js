import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const homePage = (user) => {
  clearDom();
  const domString = `
    <h1>Welcome, ${user.displayName}! </h1>
    <div class="group">
    <button type="button" class="btn btn-success btn-lg">View Orders</button>
    <button type="button" class="btn btn-info btn-lg">Create an Order</button>
    <button type="button" class="btn btn-warning btn-lg">View Revenue</button>
    </div>
  `;
  renderToDOM('#main-container', domString);
};

export default homePage;
