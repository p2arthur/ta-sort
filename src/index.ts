import { CharactersCollection } from './CharactersCollection';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
const numberCollection = new NumberCollection([
  7, 3, 5, 2, 1, 6, 4, -5, 10, 12, 10000, 60000,
]);
const charactersCollection = new CharactersCollection(
  'zXcVaBoiupqhwenaksjnduioqwneiuqwbnaiuysdbquiywehbiaujdbiquweyjabsdquiwyeb'
);

const sorter = new Sorter();

sorter.sortCollection(numberCollection);
sorter.sortCollection(charactersCollection);

console.log(numberCollection.data);
console.log(charactersCollection.data);
