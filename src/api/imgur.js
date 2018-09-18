import qs from 'qs';


const CLIENT_ID = '5d375733b254343';
const ROOT_URL = 'https://api.imgur.com'


export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    
    window.location = `${ROOT_URL}/oauth/authorize?${qs.stringify(querystring)}`;

  }
}
