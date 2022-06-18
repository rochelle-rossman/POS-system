import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const noItems = () => {
  document.querySelector('#main-container').innerHTML = '<h1>No Items</h1>';
};
const viewOrder = (array) => {
  clearDom();
  let domString = ' ';

  domString = '<h1>TOTAL: </h1>';

  if (array.length) {
    let itemString = ' ';
    array.forEach((item) => {
      itemString += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <h2>${item.orderObject.itemName}</h2>
        <h3>${item.orderObject.itemPrice}</h3>
        <i id="edit-item--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-item--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
    });
    renderToDOM('#view', domString);
    renderToDOM('#main-container', itemString);
  } else {
    noItems();
  }
};
export default viewOrder;
