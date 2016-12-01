gameController.$inject = ['$scope'];

import player from '../models/player';
import rooms from '../models/rooms';

export default function gameController($scope){ //eslint-disable-line no-unused-vars
  console.log('in gameController');
  console.log('rooms: ' , rooms);
  console.log('player: ', player);

  $scope.player=player;
  $scope.roomDescription = rooms[player.room].description;

  this.move = function(direction){
    console.log('player moved in this direction', direction);
    if (rooms[player.room][direction] != null){
      player.room = rooms[player.room][direction];
    }
    else {
      alert('You cannot move in that direction.');
    }
    console.log('I am in ', player.room);
    $scope.roomDescription = rooms[player.room].description;
  };

  this.equip = function(){
    console.log('player clicked equip item');
    if (rooms[player.room].item != null){
      var dropped = player.item;
      console.log(rooms[player.room].item);
      player.item=rooms[player.room].item;
      rooms[player.room].item=dropped;
    }
    else {
      alert('There is nothing in this room to equip.');
    }
    console.log('I have this equipped: ', player.item);
    $scope.playerItem = player.item;
  };

  this.fight = function(){
    console.log('player clicked fight');
    if (rooms[player.room].monster != null){
      console.log('player is fighting this monster: '+ rooms[player.room].monster+ ' with a '+player.item);
    }
    else {
      alert('There is nothing in this room to fight.');
    }
  };


}




