import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);
