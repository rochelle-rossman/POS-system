import firebase from 'firebase/app';
import startApp from './startApp';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import { logoutButton } from '../components/buttons/logoutButton';
import firebaseConfig from '../../api/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
