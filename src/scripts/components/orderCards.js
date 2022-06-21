import renderToDOM from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';

const noOrders = () => {
  document.querySelector('#main-container').innerHTML = '<h1>No Orders</h1>';
};

const viewOrders = (array) => {
  clearDom();

  if (array.length) {
    let string = ' ';
    array.forEach((order) => {
      string += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5>${order.orderName}</h5>
        <p id="customer-phone">${order.customerPhone}</p>
        <p id="customer-email">${order.customerEmail}</p>
        <p id="call-in">${order.callIn}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-orderdetails-btn--${order.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-order--${order.firebaseKey}"></i>
        <i class="btn btn-light far fa-trash-alt" style="background-color: red" id="delete-card-btn--${order.firebaseKey}"></i>
      </div>
    </div>
    `;
    });
    renderToDOM('#main-container', string);
  } else {
    noOrders();
  }
};

export default viewOrders;
