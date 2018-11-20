const assert = require('assert');
const { map,filter } = require("./library.js");

//........ Test for map ..........//

const testMap = function(inputArray,callbackFunction,expectedOutput){
  assert.deepEqual(map(inputArray,callbackFunction),expectedOutput);
}

const identity = function(input){
  return input;
}

const mulWith10 = function(input){
  return input*10;
}

const makeUpperCase = function(input){
  return input.toUpperCase();
}
const measureLength = function(input){
  return input.length;
}

testMap([],identity,[]);
testMap([0,1,2,3],identity,[0,1,2,3]);
testMap(["Japan","Germany","Madagascar"],identity,["Japan","Germany","Madagascar"]);
testMap([],mulWith10,[]);
testMap([0,1,2,3],mulWith10,[0,10,20,30]);
testMap(["naruto","sasuke","sakura"],makeUpperCase,["NARUTO","SASUKE","SAKURA"]);
testMap(["a","A","1"],measureLength,[1,1,1]);
testMap(["naruto","uzumaki","leaf"],measureLength,[6,7,4]);

//........ Test for filter ........//

const testFilter = function(inputArray,callbackFunction,expectedOutput){
  assert.deepEqual(filter(inputArray,callbackFunction),expectedOutput);
}

const numberGreaterThan10 = function(input){
  if (input > 10) return true;
  return false;
}

const longWords = function(input){
  if (input.length > 6) return true;
  return false;
}

testFilter([],numberGreaterThan10,[]);
testFilter([0],numberGreaterThan10,[]);
testFilter([2,5,8,12,25,0,30,15],numberGreaterThan10,[12,25,30,15]);
testFilter([],longWords,[]);
testFilter(["ninja"],longWords,[]);
testFilter(["kakashi","ninja","konoha","hashirama"],longWords,["kakashi","hashirama"]);

console.log("\n............... All test are Fine ............\n");


