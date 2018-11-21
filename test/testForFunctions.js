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
    it('should work for identity function',function(){
      assert.deepEqual(map([],identity),[]);
      assert.deepEqual(map([0,1,2,3],identity),[0,1,2,3]);
      assert.deepEqual(map(["Japan","Germany","Madagascar"],identity),["Japan","Germany","Madagascar"]);
    });
    it('arithmatic operations on numbers',function(){
      assert.deepEqual(map([],mulWith10),[]);
      assert.deepEqual(map([0,1,2,3],mulWith10),[0,10,20,30]);
    })
    it('should work on strings',function(){
      assert.deepEqual(map(["naruto","sasuke","sakura"],makeUpperCase),["NARUTO","SASUKE","SAKURA"]);
      assert.deepEqual(map(["a","A","1"],measureLength),[1,1,1]);
      assert.deepEqual(map(["naruto","uzumaki","leaf"],measureLength),[6,7,4]);
    });
  });
  describe('filter',function(){
    it ('should filter numbers',function(){
      assert.deepEqual(filter([],numberGreaterThan10),[]);
      assert.deepEqual(filter([0],numberGreaterThan10),[]);
      assert.deepEqual(filter([2,5,8,12,25,0,30,15],numberGreaterThan10),[12,25,30,15]);
    })
    it ('should filter strings',function(){
      assert.deepEqual(filter([],longWords),[]);
      assert.deepEqual(filter(["ninja"],longWords),[]);
      assert.deepEqual(filter(["kakashi","ninja","konoha","hashirama"],longWords),["kakashi","hashirama"]);
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

