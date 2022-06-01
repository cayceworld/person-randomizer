const fs = require('fs');

const genders = [
  'M', 'F',
];

const maleNames = [
  'John', 'Johny', 'Joe', 'Josh', 'Brad',
];

const famaleNames = [
  'Klara', 'Diana', 'Monika', 'Ola', 'Anna',
];

const lastNames = [
  'Pitt', 'Belushi', 'Kravchuk', 'Corleone', 'Pochehcun',
];

const people = [];

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 20; i++) {
  let obj = {};

  randomChoice(genders);
  obj.gender = randomChoice(genders);
  if (obj.gender === 'M') {
    obj.name = randomChoice(maleNames);
  } else if (obj.gender === 'F') {
    obj.name = randomChoice(famaleNames);
  }
  obj.lastName = randomChoice(lastNames);
  obj.age = getRandomInt(18, 79);
  obj.mail = obj.name.toLowerCase() +'.'+ obj.lastName.toLowerCase() + '@gmail.com';
  
  people.push(obj);

}
console.log(people);
const output = JSON.stringify(people);

 fs.writeFile('outputfile.txt', output, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});  