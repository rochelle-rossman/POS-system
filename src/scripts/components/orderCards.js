import renderToDOM from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';

const noOrders = () => {
  document.querySelector('#main-container').innerHTML = '<h1>No Orders</h1>';
};

const showOrders = (array) => {
  clearDom();

  if (array.length) {
    let string = ' ';
    array.forEach((order) => {
      string += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${order.firebaseKey}</h5>
        <p>${order.isOpen}</p>
        <p>${order.customerObject.customerPhone}</p>
        <p>${order.customerObject.customerEmail}</p>
        <p>${order.callIn}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-orderdetails-btn--${order.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-card--${order.firebaseKey}"></i>
        <i class="btn btn-light far fa-trash-alt" id="delete-card-btn--${order.firebaseKey}"></i>
      </div>
    </div>
    `;
    });
    renderToDOM('#main-container', string);
  } else {
    noOrders();
  }
};
