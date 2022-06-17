import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const viewOrder = (obj) => {
  clearDom();
  let domString = ' ';
  let itemString = ' ';

  domString = '<h1>TOTAL: </h1>';

  const array = obj.orderItems;
  array.forEach((item) => {
    itemString += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <h2>${item.itemName}</h2>
        <h3>${item.itemPrice}</h3>
        <i id="edit-item--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-item--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#view', domString);
  renderToDOM('#main-container', itemString);
};
