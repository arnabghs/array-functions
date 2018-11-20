const assert = require('assert');
const { map,filter } = require("../library.js");
const {
  identity,
  mulWith10,
  makeUpperCase,
  measureLength,
  numberGreaterThan10,
  longWords 
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
})

