import fruits from './foods.js';
import {choice, remove} from './helpers.js';

const RANDOMFRUIT = choice(fruits);
const FRUITSLEFT = fruits.length;
console.log(`I’d like one ${RANDOMFRUIT}, please.`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log(`Delicious! May I have another ?`);
remove(fruits, RANDOMFRUIT);
console.log(`I’m sorry, we’re all out. We have ${FRUITSLEFT} fruits left.`);