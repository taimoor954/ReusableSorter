"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterColletion_1 = require("./CharacterColletion");
var NumberCollection_1 = require("./NumberCollection");
var charCollection = new CharacterColletion_1.CharacterCollection("bsa");
charCollection.sort();
console.log(charCollection.data);
var numberCollection = new NumberCollection_1.NumberCollection([10, 30, 20, 50, 40]);
numberCollection.sort();
console.log(numberCollection.data);
// const sorter = new Sorter(charCollection);
// sorter.sort();
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-19);
// linkedList.add(-2);
// linkedList.add(2);
// // sorter.sort();
// linkedList.print()
