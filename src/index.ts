import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';

const numberCollection = new NumberCollection([
  7, 3, 5, 2, 1, 6, 4, -5, 10, 12, 10000, 60000,
]);

numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection(
  'zXcVaBoiupqhwenaksjnduioqwneiuqwbnaiuysdbquiywehbiaujdbiquweyjabsdquiwyeb'
);

charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(500);
linkedList.add(5);
linkedList.add(32);
linkedList.add(323);
linkedList.add(122);
linkedList.add(335);
linkedList.add(-16);

linkedList.sort();
linkedList.print();
