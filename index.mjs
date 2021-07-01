import fetchBreed from './breedFetcher.mjs';

const breed = process.argv[2] || 'aegean';

fetchBreed(breed, (err, res) => {
  if (err) throw err;
  console.log(breed, '\n\n', res);
});
