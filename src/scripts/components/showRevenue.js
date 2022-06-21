import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import { getRevenue } from '../../api/revenueData';

const renderRevenue = (obj) => {
  clearDom();
  obj.forEach((item) => {
    const domString = `
  <h2>Revenue</h2>
  <h1>TOTAL REVENUE: <h1 id="totalRev"></h1></h1>
  <p>Date Range:</p>
  <p id="rangeOfDates">{Interpolated First Order's Date} - {Interpolated Last Order's Date}</p>
  <p>Total Tips: <p id="totalTips">{Interpolated Total Tip amount from all tips}</p></p>
  <p>Total Call in Orders: {Interpolated Number of Call in Orders}</p>
  <p>Total Walk in Orders: {Interpolated Number of Walk in Orders}</p>
  <p>Total Payment Types:</p>
  <p>Cash- {Interpolated Number of times Cash was used}</p>
  <p>Credit- {Interpolated Number of times Credit was used</p>
  <p>Mobile- {Interpolated Number of times Mobile was used</p>
  `;
    console.warn(item);
    renderToDOM('#main-container', domString);
  });
};
getRevenue();

export default renderRevenue;
