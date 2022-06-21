import { createNewMenuItem, getMenuItems, updateMenuItem } from '../../api/menuData';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-item')) {
      const itemObject = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        itemDescription: document.querySelector('#item-description').value,
        orderId: document.querySelector(),
        itemCategory: document.querySelector('#item-category').value
      };
      createNewMenuItem(itemObject).then(() => getMenuItems().then());
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        itemDescription: document.querySelector('#item-description').value,
        itemCategory: document.querySelector('#item-category').value,
        firebaseKey
      };
      updateMenuItem(itemObject).then();
    }
  });
};
export default formEvents;
