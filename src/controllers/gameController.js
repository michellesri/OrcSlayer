gameController.$inject = ['$scope'];

import player from '../models/player';
import rooms from '../models/rooms';

export default function gameController($scope){ //eslint-disable-line no-unused-vars
  console.log('in gameController');
  console.log('rooms: ' , rooms);
  console.log('player: ', player);

  $scope.player=player;
  $scope.roomDescription = rooms[player.room].description;
  $scope.directions = ['N', 'E', 'S', 'W'];

  $scope.getRandomNum = function(){
    return Math.floor(Math.random() * 4) + 1;
  };

  $scope.playerRoulette = function(){
    var randomNum = $scope.getRandomNum();
    if(randomNum === 1){
      return player.life = false;
    }
  };

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

  this.run = function(){
    console.log('player clicked run');
    if (rooms[player.room].monster != null){
      console.log('player is running away from this monster: '+ rooms[player.room].monster);
      var randomRoom = rooms[player.room][$scope.directions[$scope.getRandomNum()]];
      if(randomRoom != null){
        player.room = randomRoom;
        console.log(`player is in room ${player.room}`);
        $scope.roomDescription = rooms[player.room].description;

      } else {
        console.log('the was no room in that direction. player ran into a wall and died.');
        location.reload();
        alert('there was no room in that direction. player ran into a wall and died. game over.');

      }
    } else {
      console.log('There is nothing in this room to run from.');
    }
  };

  this.talk = function(){
    console.log('player clicked talk');
    if (rooms[player.room].monster != null){
      console.log('player is talking to this monster: '+ rooms[player.room].monster);
      var randomNum = $scope.getRandomNum();
      if(randomNum === 1){
        console.log('woooo you talked to the monster and won!');
      } else{
        location.reload();
        alert('the monster got mad at the things you said and killed you. game over.');
      }
      // $scope.gameDescription = 'you are talking';
    }
    else {
      alert('There is nothing in this room to talk to. Are you going crazy?');
    }
  };
}
