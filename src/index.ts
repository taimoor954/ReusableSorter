import { CharacterCollection } from "./CharacterColletion";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

const charCollection = new CharacterCollection("bsa");
charCollection.sort()
console.log(charCollection.data);


const numberCollection = new NumberCollection([10, 30, 20, 50, 40]);
numberCollection.sort()
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
