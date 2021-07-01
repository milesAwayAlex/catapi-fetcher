import fb from '../breedFetcher.mjs';
import {expect} from 'chai';

describe('#breedFetcher', () => {
  it('returns the description for a breed, via callback', done => {
    fb('mau', (err, res) => {
      expect(err).null;
      expect(res).equal(
        'Arabian Mau cats are social and energetic. Due to their energy levels, these cats do best in homes where their owners will be able to provide them with plenty of playtime, attention and interaction from their owners. These kitties are friendly, intelligent, and adaptable, and will even get along well with other pets and children.'
      );
      done();
    });
  });
  it('returns an error for non-valid breed', done => {
    fb('non-existent-breed', (err, res) => {
      expect(err).an('error');
      expect(res).null;
      done();
    });
  });
});
