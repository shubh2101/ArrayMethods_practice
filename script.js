const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Yoda',
    height: 66,
    mass: 17,
    eye_color: 'green',
    gender: 'male',
  },
  {
    name: 'Padmé Amidala',
    height: 165,
    mass: 45,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 81,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Mace Windu',
    height: 194,
    mass: 89,
    eye_color: 'brown',
    gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
const names = characters.map((chars) => {
  return chars.name;
});
// console.log(names);

//2. Get array of all heights
const heights = characters.map((chars) => {
  return chars.height;
});
// console.log(heights);
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((chars) => {
  return { name: chars.name, height: chars.height };
});

// console.log(nameAndHeight);

//4. Get array of all first names
const firstNames = characters.map((chars) => {
  const first = chars.name.split(' ')[0];
  return first;
});
// console.log(firstNames);

const numbers = [175, 50, 25];
const sub = numbers.reduce((total, num) => total - num);
const sub2 = numbers.reduceRight((total, num) => total - num);
// console.log(sub);
// console.log(sub2);

//***REDUCE***
//1. Get total mass of all characters
// const masses = characters.map((chars) => chars.mass);
const totalMass = characters.reduce(
  (total, characters) => total + characters.mass,
  0
);
// console.log(totalMass);

//2. Get total height of all characters
const totalHeight = heights.reduce((total, height) => total + height, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
// const eyeColors = characters.map((chars) => chars.eye_color);
const eyeColorsCount = characters.reduce((acc, curr) => {
  const eyeColor = curr.eye_color;
  if (!acc[eyeColor]) {
    acc[eyeColor] = 1;
  } else {
    acc[eyeColor] += 1;
  }
  return acc;
}, {});

// console.log(eyeColorsCount);

//4. Get total number of characters in all the character names
const charsCount = characters.reduce((acc, curr) => {
  const names = curr.name;
  //   const noSpaceNames = names.replace(/ /g, '');
  const noSpaceNames = names.split(' ').join('');

  acc[names] = noSpaceNames.length;
  return acc;
}, {});
// console.log(charsCount);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater100 = characters.filter((chars) => chars.mass > 100);
// console.log(massGreater100);

//2. Get characters with height less than 200
const heightLess200 = characters.filter((chars) => chars.height < 200);
// console.log(heightLess200);

//3. Get all male characters
const maleChars = characters.filter((chars) => chars.gender === 'male');
// console.log(maleChars);
//4. Get all female characters
const femaleChars = characters.filter((chars) => chars.gender === 'female');

//***SORT***
//SORT method modify the original array, toSorted not

//1. Sort by mass
const sortByMass = characters.toSorted((a, b) => a.mass - b.mass);
// console.log(sortByMass);

//2. Sort by height
const sortByHeight = characters.toSorted((a, b) => a.height - b.height);
// console.log(sortByHeight);
//3. Sort by name

const sortedByName = characters.toSorted((a, b) => {
  const nameA = a.name.toUpperCase(); // Ignore case
  const nameB = b.name.toUpperCase(); // Ignore case

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0; // Names are equal
});
// console.log(sortedByName);
// console.log(characters);
//4. Sort by gender
const sortByGender = characters.toSorted((a, b) => {
  const genderA = a.gender.toLowerCase();
  const genderB = b.gender.toLowerCase();

  if (genderA < genderB) {
    return -1;
  }
  if (genderA > genderB) {
    return 1;
  }
  return 0; // Genders are equal
});
// console.log(sortByGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
