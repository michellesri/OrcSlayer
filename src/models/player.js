
// let player = {
//   life: 20,
//   room: 12,
//   item: {name: null, strength: null, text: null}
// };

// module.exports = player;

export default class Player {
  constructor () {
    this.life = 20;
    this.room = 0;
    this.item = { name: null, strength: null, text: null };
  }

  setLocation(loc) {
    this.room = loc;
  }
}