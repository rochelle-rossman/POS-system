import axios from 'axios';

const dbUrl = 'https://hip-hop-pizza-and-wangs-default-rtdb.firebaseio.com';

const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createNewMenuItem = (itemObject, firebaseKey) => new Promise((resolve, reject) => {
  // eslint-disable-next-line semi
  axios.get(`${dbUrl}/orders/"${firebaseKey}".json`)
  // .then(() => {
  axios.post(`${dbUrl}/items.json`, itemObject)
    // .then((taco) => resolve(taco.data));
    .then((response) => {
      const addFBK = {
        firebaseKey: response.data.name,
        orderId: response.data.firebaseKey
      };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, addFBK)
        .then(() => {
          getMenuItems().then((itemArray) => resolve(itemArray));
        });
      // });
    }).catch((error) => reject(error));
});

const updateMenuItem = (itemObject, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObject.firebaseKey || firebaseKey}.json`, itemObject)
    .then(() => {
      getMenuItems(itemObject).then((itemArray) => resolve(itemArray));
    }).catch((error) => reject(error));
});

const deleteMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getMenuItems().then((itemArray) => resolve(itemArray));
    }).catch((error) => reject(error));
});
const getSingleItem = (firebasekey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="firebasekey"&equalTo="${firebasekey}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getMenuItems,
  createNewMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getSingleItem
};
