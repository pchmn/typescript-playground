import { adjectives, colors, trees, vehicles } from './wordsFr';

const animals: string[] = [
  'aardvark', 'albatross', 'alligator', 'anteater', 'antelope', 'armadillo', 'baboon', 'badger', 'bat', 'beaver',
  'bison', 'buffalo', 'butterfly', 'camel', 'capybara', 'caribou', 'cat', 'chameleon', 'cheetah', 'chimpanzee',
  'chinchilla', 'chipmunk', 'cobra', 'coyote', 'crocodile', 'dolphin', 'donkey', 'dormouse', 'dromedary', 'eagle',
  'elephant', 'emu', 'ferret', 'flamingo', 'fox', 'frog', 'gazelle', 'giraffe', 'gnat', 'goat',
  'goose', 'gorilla', 'hamster', 'hedgehog', 'heron', 'hippopotamus', 'hornet', 'horse', 'hyena', 'iguana',
  'jackal', 'jaguar', 'jellyfish', 'kangaroo', 'koala', 'lemur', 'leopard', 'lion', 'llama', 'lobster',
  'lynx', 'macaw', 'marmoset', 'meerkat', 'mink', 'mole', 'mongoose', 'monkey', 'moose', 'mosquito',
  'mouse', 'newt', 'opossum', 'orangutan', 'otter', 'ostrich', 'panda', 'panther', 'parrot', 'peacock',
  'pelican', 'penguin', 'pig', 'platypus', 'porcupine', 'possum', 'puma', 'quail', 'rabbit', 'raccoon',
  'rattlesnake', 'reindeer', 'rhinoceros', 'seahorse', 'seal', 'sheep', 'skunk', 'sloth', 'snail', 'snake',
  'squirrel', 'starfish', 'stingray', 'swan', 'tamarin', 'tapir', 'tiger', 'tortoise', 'toucan', 'turtle',
  'vampire bat', 'wallaby', 'walrus', 'wasp', 'weasel', 'whale', 'wolf', 'wolverine', 'wombat', 'woodchuck',
  'yak', 'zebra'
];

// Function to generate a random integer within a range
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAnimalFlowerTreeOrVehicle(): string {
  const category = getRandomInt(0, 2);
  switch (category) {
    case 0:
      return animals[getRandomInt(0, animals.length - 1)];
    case 1:
      return trees[getRandomInt(0, trees.length - 1)];
    default:
      return vehicles[getRandomInt(0, vehicles.length - 1)];
  }
}

// Function to generate a random combination
function generateRandomCombination(): string {
  const adjective = adjectives[getRandomInt(0, adjectives.length - 1)];
  const animalFlowerTreeOrVehicle = getRandomAnimalFlowerTreeOrVehicle();
  const color = colors[getRandomInt(0, colors.length - 1)];
  const category = getRandomInt(0, 1);

  return `${animalFlowerTreeOrVehicle} ${adjective}`
}

// Example usage:
const randomCombination = generateRandomCombination();
// console.log(randomCombination);
console.log(new Array(new Set(animals)), animals.length)
