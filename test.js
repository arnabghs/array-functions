const assert = require('assert');
const { map } = require("./library.js");

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


console.log("\n............... All test are Fine ............\n");


