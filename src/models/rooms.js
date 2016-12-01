let roomZero = {
  description: 'you are in room zero',
  item: 'turkey drumstick',
  monster: null,
  N: null,
  E: null,
  S: 1,
  W: null
};

let roomOne = {
  description: 'you are in room one',
  item: null,
  monster: null,
  N: 0,
  E: 2,
  S: null,
  W: null
};

let roomTwo = {
  description: 'you are in room two',
  item: 'sword',
  monster: null,
  N: 3,
  E: null,
  S: null,
  W: 1
};

let roomThree = {
  description: 'you are in room three',
  item: null,
  monster: 'Orc',
  N: null,
  E: null,
  S: 2,
  W: null
};

let rooms = [roomZero, roomOne, roomTwo, roomThree];

module.exports = rooms;
