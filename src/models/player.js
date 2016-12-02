// import rooms from '../models/rooms';

let player = {
  // life: true,
  room: 12,
  item: {name: null, strength: null, text: null}
};

// player.move = function(direction){
//   console.log('player moved in this direction', direction);
//   if (rooms[player.room][direction] != null){
//     player.room = rooms[player.room][direction];
//   }
//   else {
//     alert('You cannot move in that direction.');
//   }
//   console.log('I am in ', player.room);
// };

module.exports = player;
