import {get} from 'native-request';
const breed = process.argv[2] || 'aegean';

get(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (err, data, status) => {
    if (err) throw err;
    if (status !== 200) {
      console.log('STATUS:', status);
      process.exit(1);
    }
    data = JSON.parse(data);
    if (!data.length) {
      console.log(`Breed ${breed} not found..`);
      process.exit(1);
    }
    console.log(breed, '\n\n', data[0].description);
  }
);
