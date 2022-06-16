import renderRevenue from '../components/showRevenue';
import { getRevenue } from '../../api/revenueData';

const revEvent = () => {
  document.querySelector('#revLink').addEventListener('click', () => {
    getRevenue().then((revenueObj) => renderRevenue(revenueObj));
  });
};

export default revEvent;
