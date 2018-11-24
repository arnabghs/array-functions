const assert = require('assert');
const { map,filter,reduce,mapPrime,filterPrime,reducePrime } = require("../library.js");
const {
  identity,
  mulWith10,
  makeUpperCase,
  measureLength,
  numberGreaterThan10,
  longWords,
  sum,
  greatestNumber,
  filter2ndElement
} = require("../src/util.js");

describe ('Array Functions',function(){
  describe('map',function(){
    it('with empty array it should return empty array',function(){
      assert.deepEqual(map(identity,[]),[]);
      assert.deepEqual(map(mulWith10,[]),[]);
    });
    it('with single element array it should return a array of single element',function(){
      assert.deepEqual(map(identity,[1]),[1]);
      assert.deepEqual(map(measureLength,["A"]),[1]);
    })
    it('with multi-elements array it should preserve the length of the array',function(){
      assert.deepEqual(map(identity,["Japan","Germany","Madagascar"]),["Japan","Germany","Madagascar"]);
      assert.deepEqual(map(mulWith10,[0,1,2,3]),[0,10,20,30]);
      assert.deepEqual(map(makeUpperCase,["naruto","sasuke","sakura"]),["NARUTO","SASUKE","SAKURA"]);
      assert.deepEqual(map(measureLength,["naruto","uzumaki","leaf"]),[6,7,4]);
    });
    it('with array of all empty elements it should return an identical array',function(){
      assert.deepEqual(map(mulWith10,[,,,,]),[,,,,]); 
      assert.deepEqual(map(measureLength,[,,,,]),[,,,,]); 
    })
  });
  describe('filter',function(){
    it ('with empty array should return empty array',function(){
      assert.deepEqual(filter(numberGreaterThan10,[]),[]);
      assert.deepEqual(filter(longWords,[]),[]);
    })
    it ('with all truthy values returns an identical array',function(){
      assert.deepEqual(filter((x)=> true,[1,2,3]),[1,2,3]);
      assert.deepEqual(filter((x)=> true,['a','b','c']),['a','b','c']);
    })
    it ('with all falsy values returns an empty array',function(){
      assert.deepEqual(filter((x)=> false,[1,2,3]),[]);
      assert.deepEqual(filter((x)=> false,['a','b','c']),[]);
    })
    it ('with both truthy and falsy values should return an array of lesser length than input array',function(){
      assert.deepEqual(filter(longWords,["ninja"]),[]);
      assert.deepEqual(filter(longWords,["kakashi","ninja","konoha","hashirama"]),["kakashi","hashirama"]);
      assert.deepEqual(filter(numberGreaterThan10,[0]),[]);
      assert.deepEqual(filter(numberGreaterThan10,[2,5,8,12,25,0,30,15]),[12,25,30,15]);
    })
  })
  describe('reduce',function(){
    it('should return undefined for an empty array with no initial value',function(){
      assert.deepEqual(reduce(sum,[]),undefined);
      assert.deepEqual(reduce(greatestNumber,[]),undefined);
    });
    it ('should return the initial value for an empty array',function(){
      assert.deepEqual(reduce(sum,[],0),0);
      assert.deepEqual(reduce(greatestNumber,[],0),0);
      assert.deepEqual(reduce(filter2ndElement,[],[]),[]);
    })
    it('for single element array and no initial value returns the value of element',function(){
      assert.deepEqual(reduce(greatestNumber,[1]),1);
      assert.deepEqual(reduce(sum,[1]),1);
      assert.deepEqual(reduce(filter2ndElement,[[1]]),[1]);
    })
    it('for multi elements array returns a single value',function(){
      assert.deepEqual(reduce(sum,[1,2,3,4]),10);
      assert.deepEqual(reduce(sum,[-1,-2,0,1,2],5),5);
      assert.deepEqual(reduce(greatestNumber,[1,2,3,4],0),4);
      assert.deepEqual(reduce(greatestNumber,[-2,-1,0]),0);
      assert.deepEqual(reduce(filter2ndElement,[2,3,4,5,6]),[2,4,6]);
      assert.deepEqual(reduce(filter2ndElement,[1,2,-3,-4,5,0,6,7,0],[]),[1,-3,5,6,0]);
      assert.deepEqual(reduce(filter2ndElement,['a','b','c','d']),['a','c']);
    })
  })
  describe('mapPrime',function(){
    it('with empty array it should return empty array',function(){
      assert.deepEqual(mapPrime(identity,[]),[]);
      assert.deepEqual(mapPrime(mulWith10,[]),[]);
    });
    it('with single element array it should return a array of single element',function(){
      assert.deepEqual(mapPrime(identity,[1]),[1]);
      assert.deepEqual(mapPrime(measureLength,["A"]),[1]);
    })
    it('with multi-elements array it should preserve the length of the array',function(){
      assert.deepEqual(mapPrime(identity,["Japan","Germany","Madagascar"]),["Japan","Germany","Madagascar"]);
      assert.deepEqual(mapPrime(mulWith10,[0,1,2,3]),[0,10,20,30]);
      assert.deepEqual(mapPrime(makeUpperCase,["naruto","sasuke","sakura"]),["NARUTO","SASUKE","SAKURA"]);
      assert.deepEqual(mapPrime(measureLength,["naruto","uzumaki","leaf"]),[6,7,4]);
    });
    it('with array of all empty elements it should return an identical array',function(){
      assert.deepEqual(mapPrime(mulWith10,[,,,,]),[,,,,]); 
      assert.deepEqual(mapPrime(measureLength,[,,,,]),[,,,,]); 
    })
  });
  describe('filterPrime',function(){
    it ('with empty array should return empty array',function(){
      assert.deepEqual(filterPrime(numberGreaterThan10,[]),[]);
      assert.deepEqual(filterPrime(longWords,[]),[]);
    })
    it ('with all truthy values returns an identical array',function(){
      assert.deepEqual(filterPrime((x)=> true,[1,2,3]),[1,2,3]);
      assert.deepEqual(filterPrime((x)=> true,['a','b','c']),['a','b','c']);
    })
    it ('with all falsy values returns an empty array',function(){
      assert.deepEqual(filterPrime((x)=> false[1,2,3]),[]);
      assert.deepEqual(filterPrime((x)=> false,['a','b','c']),[]);
    })
    it ('with both truthy and falsy values should return an array of lesser length than input array',function(){
      assert.deepEqual(filterPrime(longWords,["ninja"]),[]);
      assert.deepEqual(filterPrime(longWords,["kakashi","ninja","konoha","hashirama"]),["kakashi","hashirama"]);
      assert.deepEqual(filterPrime(numberGreaterThan10,[0]),[]);
      assert.deepEqual(filterPrime(numberGreaterThan10,[2,5,8,12,25,0,30,15]),[12,25,30,15]);
    })
  })
describe('reducePrime',function(){
    it('should return undefined for an empty array with no initial value',function(){
      assert.deepEqual(reducePrime([],sum),undefined);
      assert.deepEqual(reducePrime([],greatestNumber),undefined);
    });
    it ('should return the initial value for an empty array',function(){
      assert.deepEqual(reducePrime([],sum,0),0);
      assert.deepEqual(reducePrime([],greatestNumber,0),0);
    })
    it('for single element array and no initial value returns the value of element',function(){
      assert.deepEqual(reducePrime([1],greatestNumber),1);
      assert.deepEqual(reducePrime([1],sum),1);
    })
    it('for multi elements array returns a single value',function(){
      assert.deepEqual(reducePrime([1,2,3,4],sum),10);
      assert.deepEqual(reducePrime([-1,-2,0,1,2],sum,5),5);
      assert.deepEqual(reducePrime([1,2,3,4],greatestNumber,0),4);
      assert.deepEqual(reducePrime([-2,-1,0],greatestNumber),0);
    })
  })
})

