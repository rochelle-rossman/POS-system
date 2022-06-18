import { getOrderItems, getSingleOrder } from './orderData';

const orderDetail = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getOrderItems(orderObject.firebaseKey)
        .then((itemObject) => {
          resolve({ itemObject, ...orderObject });
        });
    }).catch((error) => reject(error));
});

export default orderDetail;
