let Zero = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: 1,
  S: 4,
  W: null
};

let One = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: 2,
  S: 5,
  W: 1
};

let Two = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: 3,
  S:  null,
  W: 1
};

let Three = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: null,
  S:  7,
  W: 2
};

let Four = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 0,
  E: 5,
  S:  null,
  W: null
};

let Five = {
  description: ' a bright entryway with doors on all four sides.  Dusty light streams down from the stained glass dome, illuminating a spinning wheel sitting on a large intricate carpet.  ',
  item: {name: null, strength: null, text: null},
  monster: {name: 'Maiden', strength: 8, alive: true, text: '  A beautiful maiden is standing in the center of the room.  She backs away from you with a terrified expression.', defeat: '  The formerly beautiful dead maiden lays face down on the blood-stained carpet.', item:{name: 'pearl-handled dagger', strength: 8, text: '  A glittering dagger with a large pearl on the pommel lays on the carpet several feet from the dead maiden.'}},
  N: 1,
  E: 6,
  S:  9,
  W: 4
};

let Six = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: null,
  S:  null,
  W: 5
};

let Seven = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 3,
  E: null,
  S:  11,
  W: null
};

let Eight = {
  description: ' a suprisingly well-kept study with only one door, the one you came from. There are two chairs facing a stone hearth on the North wall of the room.  The fire in the hearth appears to have recently gone out, although nothing but warm ashes remain.',
  item: {name: 'turkey drumstick', strength: 1, text: '  A delicious-smelling turkey drumstick sits on a plate on one of the chairs.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: null,
  S: 12,
  W: null
};

let Nine = {
  description: ' a bare room with a ragged indecipherable tapestry on the west wall and doors on the north and south sides.',
  item: {name: null, strength: null, text: null},
  monster: {name: 'Orc', strength: 16, alive: true, text: '  A savage orc warrior is standing in a threatening position at the center of the room with an axe in each hand. ', defeat:'  The newly-dead body of the orc warrior lies face-up on the floor, his eyes open but unseeing.', item:{name: 'sharp axe', strength: 10, text: '  A sharp and savage-looking orcish hand axe lies besides the orcs\'s outstretched hand.'}},
  N: 5,
  E: null,
  S: 13,
  W: null
};

let Ten = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: null,
  E: 11,
  S:  14,
  W: null
};

let Eleven = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 7,
  E: null,
  S:  15,
  W: 10
};

let Twelve = {
  description: ' a dark and foul-smelling room.  The source of the smell is a bloated corpse, decomposing in the Northwest corner of the room.  There are doors on  the North and East sides of the room.',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 8,
  E: 13,
  S: null,
  W: null
};

let Thirteen = {
  description: ' a room filled with ancient implements of battle.  Old oxidized axes and swords, long ago rusted to obscure orange shapes line the walls of the chamber.  Old, notched wooden doors are found on the north and west walls.  Several mildewy practice dummies stand halfway erect in the center of the room, leaking straw.',
  item: {name: 'rusty sword', strength: 5, text: '  A rusty, but functional, iron short sword is sticking out of one of the practice dummies.'},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 9,
  E: null,
  S: null,
  W: 12
};

let Fourteen = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 10,
  E: null,
  S:  null,
  W: null
};

let Fifteen = {
  description: '',
  item: {name: null, strength: null, text: null},
  monster: {name: null, strength: null, alive: null, text: null, defeat:null, item:{name: null, strength: null, text: null}},
  N: 11,
  E: null,
  S:  null,
  W: null
};

let rooms = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen];

module.exports = rooms;

//sword, turkey drumstick, axe, dagger
