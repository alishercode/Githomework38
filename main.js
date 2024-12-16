import { sleep } from './sleep.js';
import { getRandomNumber } from './random.js';
import { Person } from './Person.js';

const person = new Person('John Doe', 1990);
const randomMs = getRandomNumber();

console.log(`Sleeping for ${randomMs} milliseconds...`);
await sleep(randomMs);

console.log('Person Information:');
console.log(person.getInfo());
