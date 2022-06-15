import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCustomers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/customers.json`).then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getCustomers;
