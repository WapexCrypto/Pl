import React from "react";
const axios = require('axios');
function Welcome = () => (
  function xlm() {
  axios.get('https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=eur&include_24hr_change=true')
  .then(res => {
    return('€' + String(res.data.stellar.eur).slice(0, 6) + ' (' + String(res.data.stellar.eur_24h_change).slice(0, 5) + '% 24H)');
  })
  .catch(error => {
    console.error(error);
  });
  return ( <div>
    <h2> { xlm() } </h2>
    Welcome To my Page
  </div>
)
);

export default Welcome;
