import {get} from 'native-request';

export default (breed, cb) => {
  get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (err, data, status) => {
      if (status !== 200) {
        err = new Error(`STATUS NOT OK: ${status}`);
      }
      data = JSON.parse(data);
      if (!data.length) {
        err = new Error(`Breed ${breed} not found..`);
      }
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, data[0].description);
    }
  );
};
