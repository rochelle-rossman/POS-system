import { getOrderItems, getSingleOrder, deleteOrders } from './orderData';
import getSingleItem from './menuData';

const orderDetail = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getOrderItems(orderObject.firebaseKey)
        .then((itemObject) => {
          resolve({ itemObject, ...orderObject });
        });
    }).catch((error) => reject(error));
});

const deleteOrderItem = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleItem(firebaseKey).then((itemArray) => {
    const deleteItemPromises = itemArray.map((item) => deleteOrderItem(item.firebaseKey));
    Promise.all(deleteItemPromises).then(() => {
      deleteOrders(firebaseKey).then((response) => resolve(response));
    });
  }).catch((error) => reject(error));
});

export {
  orderDetail,
  deleteOrderItem
};
