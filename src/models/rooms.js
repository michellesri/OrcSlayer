let roomZero = {
  description: ' a suprisingly well-kept study with only one door, the one you came from. There are two chairs facing a stone hearth on the North wall of the room.  The fire in the hearth appears to have recently gone out, although nothing but warm ashes remain.',
  item: {name: 'turkey drumstick', strength: 1, text: '  A delicious-smelling turkey drumstick sits on a plate on one of the chairs.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null, item: null}},
  N: null,
  E: null,
  S: 1,
  W: null
};

let roomOne = {
  description: ' a dark and foul-smelling room.  The source of the smell is a bloated corpse, decomposing in the Northwest corner of the room.  There are doors on  the North and East sides of the room.',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null, item: null}},
  N: 0,
  E: 2,
  S: null,
  W: null
};

let roomTwo = {
  description: ' a room filled with ancienct implements of battle.  Old oxidized axes and swords, long ago rusted to obscure orange shapes line the walls of the chamber.  Old, notched wooden doors are found on the north and west walls.  Several mildewy practice dummies stand halfway erect in the center of the room, leaking straw.',
  item: {name: 'rusty sword', strength: 5, text: '  A rusty, but functional, iron short sword is sticking out of one of the practice dummies.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null, item: null}},
  N: 3,
  E: null,
  S: null,
  W: 1
};

let roomThree = {
  description: ' a bare room with a ragged indecipherable tapestry on the west wall and doors on the north and south sides.',
  item: {name: null, strength: null, text: null, item: null},
  monster: {name: 'Orc', strength: 16, alive: true, text: '  A savage orc warrior is standing in a threatening position at the center of the room with an axe in each hand. ', defeatText:'  The newly-dead body of the orc warrior lies face-up on the floor, his eyes open but unseeing.', item:{name: 'sharp axe', strength: 10, text: '  A sharp and savage-looking orcish hand axe lies on the ground.'}},
  N: 5,
  E: null,
  S: 2,
  W: null
};

let rooms = [roomZero, roomOne, roomTwo, roomThree];

module.exports = rooms;
