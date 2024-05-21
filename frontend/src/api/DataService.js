import axios from 'axios';

export default class DataService {

  get(url, callback) {
    axios
      .get(url)
      .then(function (response) {
        callback(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
