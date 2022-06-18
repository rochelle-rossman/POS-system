import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="mb-3">
        <label for="orderName" class="form-label">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="order-name" placeholder="Order Name" value''${obj.orderName || ''}'' required>
      </div>
      <div class="mb-3">
        <label for="customerPhone" class="form-label">Customer Phone Number</label>
        <input type="number" class="form-control" id="customer-phone" aria-describedby="customer-phone" placeholder="Customer phone number" value"${obj.customerPhone || ''}" required>
      </div>
      <div class="mb-3">
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="email" class="form-control" id="customer-email" aria-describedby="customer-email" placeholder="Customer Email" value"${obj.customerEmail || ''}" required>
    </div>
    <select class="form-select" aria-label="Default select example" id="call-in">
    <option selected>Order type</option>
    <option value="Call in">Call in</option>
    <option value="Walk in">Walk in</option>
  </select>
      <button type="submit" class="btn btn-primary">Create/Edit Order</button>
    </form>`;
  renderToDOM('#main-container', domString);
};
export default addOrderForm;
