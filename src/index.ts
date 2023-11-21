import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
const numberCollection = new NumberCollection([7, 3, 5, 2, 1, 6, 4]);

const sorter = new Sorter(numberCollection);

sorter.sortCollection();
