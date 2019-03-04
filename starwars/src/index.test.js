const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      var strings = true;
      starWars.all.forEach( function(name){
        strings = (typeof name == "string");
      });
      expect(strings);
    });

    test('should contain `Luke Skywalker`', () => {
      var strings = true;
      starWars.all.forEach( function(name){
        strings = name.includes('Luke Skywalker');
      });
      expect(strings);
    });

    test('should not contain `Ben Quadinaros`', () => {
      var strings = true;
      starWars.all.forEach( function(name){
        strings = !name.includes('Ben Quadinaros');
      });
      expect(strings);
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should return an array of random items if passed a number', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });
});