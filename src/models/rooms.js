let roomZero = {
  description: 'You open the door to enter a study with only one door, the one you came from. There are two chairs facing a stone hearth on the North wall of the room.  The fire in the hearth appears to have recently gone out, although nothing but warm ashes remain.',
  item: 'turkey drumstick',
  itemText: '  A delicious-smelling turkey drumstick sits on a plate on one of the chairs.',
  monster: null,
  N: null,
  E: null,
  S: 1,
  W: null
};

let roomOne = {
  description: 'You wake up in a dark and foul-smelling dungeon.  The source of the smell is a bloated corpse, decomposing in the Northwest corner of the room.  There are doors on  the North and East sides of the room.',
  item: null,
  itemText: null,
  monster: null,
  N: 0,
  E: 2,
  S: null,
  W: null
};

let roomTwo = {
  description: 'You enter a room filled with ancienct implements of battle.  Old oxidized axes and swords, long ago rusted to obscure orange shapes line the walls of the chamber.  Old, notched wooden doors are found on the north and west walls.  Several mildewy practice dummies stand halfway erect in the center of the room, leaking straw.',
  item: 'sword',
  itemText: '  A rusty, but functional, iron short sword is sticking out of one of the practice dummies.',
  monster: null,
  N: 3,
  E: null,
  S: null,
  W: 1
};

let roomThree = {
  description: 'As you enter the room you see a savage orc standing in a threatening position with an axe in each hand.  There are no other doors in this room.  With the exception of the orc, you do not notice any other details of the room.',
  item: null,
  itemText: null,
  monster: 'Orc',
  N: null,
  E: null,
  S: 2,
  W: null
};

let rooms = [roomZero, roomOne, roomTwo, roomThree];

module.exports = rooms;
