"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Sorter_1 = require("./Sorter");
// const charCollection = new CharacterCollection("bsa");
// const numberCollection = new NumberCollection([10, 30, 20, 50, 40]);
// const sorter = new Sorter(charCollection);
// sorter.sort();
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(-2);
linkedList.add(2);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
