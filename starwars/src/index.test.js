const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      starWars.all.forEach( function(name){
        expect(typeof name == "string");
      });
    });

    test('should contain `Luke Skywalker`', () => {
      starWars.all.forEach( function(name){
        expect(name.includes('Luke Skywalker'));
      });
    });

    test('should not contain `Ben Quadinaros`', () => {
      starWars.all.forEach( function(name){
        expect(!name.includes('Ben Quadinaros'));
      });
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      expect(starWars.random(undefined)).not.toMatch(starWars.random(undefined));
      expect(starWars.all.includes(starWars.random(undefined)));
    });

    test('should return an array of random items if passed a number', () => {
      expect(starWars.random(1)[0]).not.toMatch(starWars.random(1)[0]);
    });
  });
})