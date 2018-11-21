const assert = require('assert');
const { map,filter,reduce } = require("../library.js");
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
      assert.deepEqual(map([],identity),[]);
      assert.deepEqual(map([],mulWith10),[]);
    });
    it('with single element array it should return a array of single element',function(){
      assert.deepEqual(map([1],identity),[1]);
      assert.deepEqual(map(["A"],measureLength),[1]);
    })
    it('with multi-elements array it should preserve the length of the array',function(){
      assert.deepEqual(map(["Japan","Germany","Madagascar"],identity),["Japan","Germany","Madagascar"]);
      assert.deepEqual(map([0,1,2,3],mulWith10),[0,10,20,30]);
      assert.deepEqual(map(["naruto","sasuke","sakura"],makeUpperCase),["NARUTO","SASUKE","SAKURA"]);
      assert.deepEqual(map(["naruto","uzumaki","leaf"],measureLength),[6,7,4]);
    });
    it('with array of all empty elements it should return an identical array',function(){
      assert.deepEqual(map([,,,,],mulWith10),[,,,,]); 
      assert.deepEqual(map([,,,,],measureLength),[,,,,]); 
    })
  });
  describe('filter',function(){
    it ('with empty array should return empty array',function(){
      assert.deepEqual(filter([],numberGreaterThan10),[]);
      assert.deepEqual(filter([],longWords),[]);
    })
    it ('with all truthy values returns an identical array',function(){
      assert.deepEqual(filter([1,2,3],(x)=> true),[1,2,3]);
      assert.deepEqual(filter(['a','b','c'],(x)=> true),['a','b','c']);
    })
    it ('with all falsy values returns an empty array',function(){
      assert.deepEqual(filter([1,2,3],(x)=> false),[]);
      assert.deepEqual(filter(['a','b','c'],(x)=> false),[]);
    })
    it ('with both truthy and falsy values should return an array of lesser length than input array',function(){
      assert.deepEqual(filter(["ninja"],longWords),[]);
      assert.deepEqual(filter(["kakashi","ninja","konoha","hashirama"],longWords),["kakashi","hashirama"]);
      assert.deepEqual(filter([0],numberGreaterThan10),[]);
      assert.deepEqual(filter([2,5,8,12,25,0,30,15],numberGreaterThan10),[12,25,30,15]);
    })
  })
  describe('reduce',function(){
    it ('should give sum of a list of numbers',function(){
      assert.deepEqual(reduce([],sum,0),0);
      assert.deepEqual(reduce([1],sum,0),1);
      assert.deepEqual(reduce([1,2,3,4],sum,0),10);
      assert.deepEqual(reduce([-1,-2,0,1,2],sum,5),5);
    })
    it('should select the greatest value from a list of numbers',function(){
      assert.deepEqual(reduce([],greatestNumber,0),0);
      assert.deepEqual(reduce([1],greatestNumber,0),1);
      assert.deepEqual(reduce([1,2,3,4],greatestNumber,0),4);
      assert.deepEqual(reduce([-2,-1,0],greatestNumber,0),0);
    })
    it('should filter every second element',function(){
      assert.deepEqual(reduce([],filter2ndElement,[]),[]);
      assert.deepEqual(reduce([1],filter2ndElement,[]),[1]);
      assert.deepEqual(reduce([2,3,4,5,6],filter2ndElement,[]),[2,4,6]);
      assert.deepEqual(reduce([1,2,-3,-4,5,0,6,7,0],filter2ndElement,[]),[1,-3,5,6,0]);
      assert.deepEqual(reduce(['a','b','c','d'],filter2ndElement,[]),['a','c']);
    })
  })
})

