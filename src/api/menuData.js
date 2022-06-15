import axios from 'axios';

const dbUrl = 'https://hip-hop-pizza-and-wangs-default-rtdb.firebaseio.com'

const getMenuItems = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menus.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createNewMenuItem = (obj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/menus.json`, obj)
    .then((response) => {
      const giveFBK = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/menus/${response.data.name}.json`, giveFBK)
        .then(() => {
          getMenuItems(uid).then((wordsArray) => resolve(wordsArray));
        });
    }).catch((error) => reject(error));
});
