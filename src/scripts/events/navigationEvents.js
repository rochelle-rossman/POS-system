import signOut from '../helpers/auth/signOut';
import renderRevenue from '../components/showRevenue';

const navEvt = () => {
  document.querySelector('#logout')
    .addEventListener('click', signOut);
  document.querySelector('#revLink').addEventListener('click', () => {
    renderRevenue();
  });
};

export default navEvt;
