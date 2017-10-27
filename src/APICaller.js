const apiKey = 'RGAPI-fada87fb-6b72-40ea-b5ca-7ad7baa59658';
import axios from 'axios'

export default {
  getSummonerByName: function(summonerName) {
    debugger;
    // TODO: Validate the summoner name here
    const apiBaseURL = 'http://localhost:3001/api/';
    const fullRequestURL = apiBaseURL + summonerName + '?' + 'api_key=' + apiKey;
    return axios.get(fullRequestURL, { crossDomain: true, 'Access-Control-Allow-Origin': '*' } )
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

