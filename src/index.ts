import { CharacterCollection } from "./CharacterColletion";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

// const charCollection = new CharacterCollection("bsa");

// const numberCollection = new NumberCollection([10, 30, 20, 50, 40]);
// const sorter = new Sorter(charCollection);
// sorter.sort();
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(-2);
linkedList.add(2);
const sorter = new Sorter(linkedList)
sorter.sort();
linkedList.print()
