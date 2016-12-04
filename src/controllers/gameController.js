gameController.$inject = ['$scope'];

import player from '../models/player';
import rooms from '../models/rooms';

export default function gameController($scope){ //eslint-disable-line no-unused-vars
  console.log('in gameController');
  console.log('rooms: ' , rooms);
  console.log('player: ', player);

  this.prefix = 'You wake up in a dungeon with a pounding headache.  As your eyes focus you notice that the room around you,';
  this.roomDescription = rooms[player.room].description;
  this.directions = ['N', 'E', 'S', 'W'];
  this.moveButtons = true;

  var getRandomNum = function(){
    return Math.floor(Math.random() * 4) + 1;
  };

  this.newView = function(){
    this.talking=null;
    if(!rooms[player.room].item.name){
      this.equipButton = false;
    }
    else{
      this.equipButton = true;
    }
    if(rooms[player.room].monster.alive){
      console.log('monster alive');

      this.monsterText= rooms[player.room].monster.text;
      this.runButton = true;
      this.fightButton = true;
      this.talkButton = true;
      this.moveButtons = false;
      this.giveButton = false;
    }
    else {
      console.log('monster dead');
      this.runButton = false;
      this.fightButton =false;
      this.talkButton = false;
      this.moveButtons = true;
      if(rooms[player.room].monster.defeat){
        console.log('monster has defeat Text');
        this.monsterText= rooms[player.room].monster.defeat;
        console.log('deafeat text is', rooms[player.room].monster.defeat);
      }
      else{
        this.monsterText= null;
      }
    }
    this.roomDescription = rooms[player.room].description;
    this.itemText= rooms[player.room].item.text;
  };

  // var playerRoulette = function(){
  //   var randomNum = getRandomNum();
  //   if(randomNum === 1){
  //     return player.life = false;
  //   }
  // };

  this.move = function(direction){
    console.log('player moved in this direction', direction);
    if (rooms[player.room][direction] != null){
      player.room = rooms[player.room][direction];
      var entryPrefixes = ['You open the door and enter', 'Passing through the doorway you find yourself in', 'The room you entered is', 'As you close the door you make note of the room around you;'];
      var randomNum = getRandomNum();

      this.prefix = entryPrefixes[(randomNum-1)];
      this.newView();
    }
    else {
      alert('You cannot move in that direction.');
    }
    console.log('I am in ', player.room);

  };

  this.equip = function(){
    var dropped = player.item;
    console.log('player clicked equip item');
    if (rooms[player.room].item.name != null){
      console.log('something in the room');
      console.log(rooms[player.room].item);
      player.item=rooms[player.room].item;
      rooms[player.room].item=dropped;
      if (rooms[player.room].item.name != null){
        rooms[player.room].item.text = '  A '+dropped.name+' lies on the ground.';
      }
      else{
        rooms[player.room].item = dropped;
      }
    }
    else {
      alert('There is nothing in this room to equip.');
    }
    console.log('I have this equipped: ', player.item.name);

    this.playerItemName = player.item.name;
    this.playerItemStrength = player.item.strength;
    this.newView();
  };

  this.fight = function(){
    console.log('player clicked fight');
    if (rooms[player.room].monster.name != null){
      console.log('player is fighting this a(n) '+ rooms[player.room].monster.name+ ' with a(n) '+player.item.name);
      // var randomNum = getRandomNum();
      // var playerStrength = player.item.strength*randomNum;
      // Cheat code:
      var playerStrength = 100;
      console.log('Player Attack is ', playerStrength);
      if (playerStrength >= rooms[player.room].monster.strength){
        alert('Congratulations!  You defeated the '+ rooms[player.room].monster.name+'.');
        rooms[player.room].monster.alive = false;
        rooms[player.room].item = rooms[player.room].monster.item;
        rooms[player.room].monster.item = null;
        this.prefix = 'As your bloodlust settles down, you notice that you are still in';
        this.newView();
      }
      else{
        location.reload();
        alert('Alas!  You were killed by the '+ rooms[player.room].monster.name+'.');
      }

    }
    else {
      alert('You are getting paranoid, there is nothing in this room to fight.');
    }
  };

  this.run = function(){
    console.log('player clicked run');
    if (rooms[player.room].monster.name != null){
      console.log('player is running away from this monster: '+ rooms[player.room].monster.name);
      var randomRoom = rooms[player.room][this.directions[getRandomNum()]];
      if(randomRoom != null){
        player.room = randomRoom;
        console.log(`player is in room ${player.room}`);
        this.newView();
      } else {
        console.log('the was no room in that direction. player ran into a wall and died.');
        location.reload();
        alert('there was no room in that direction. player ran into a wall and died. game over.');

      }
    } else {
      console.log('There is nothing in this room to run from.');
    }
  };

  this.give = function(){
    console.log('give button being clicked');
    console.log('player.item.name ', player.item.name);
    console.log('rooms[player.room].monster.wants ', rooms[player.room].monster.wants);
    console.log('is it true? ', player.item.name === rooms[player.room].monster.wants);
    if(player.item.name === rooms[player.room].monster.wants) {
      console.log('I\'m giving the Orc the thing I have');
      if (rooms[player.room].monster.name === 'Orc') {
        player.item = {
          name: 'Excaliborc',
          strength: 30,
          description: 'blahblhablha'
        };
        this.playerItemName = player.item.name;
        this.playerItemStrength = player.item.strength;
        this.prefix = 'The tension in the room is no longer there. ';
        rooms[player.room].description = ' a now, much-happier scence; ';
        rooms[player.room].monster.defeat= 'there is now a happy orc laying down and eating the juicy turkey drumstick';
        rooms[player.room].monster.alive = false;
        this.roomDescription = '';
        this.monsterText ='  The hungry orc is touched by your generous gift of food.';
        this.talking = 'Orc: young traveler, i am very happy with this gift. please take this thousand year old sword: Excaliborc. may it guide you in your journey.';
        this.runButton = false;
        this.fightButton =false;
        this.talkButton = false;
        this.moveButtons = true;
        this.giveButton = false;
      }
    } else {
      if(player.item.name === null) {
        this.talk = 'FOOLISH ONE. are you trying to trick me by giving me nothing!?!';
      } else {
        alert('the orc mistook your attempt to hand him a gift as an attack with a weapon, jumped up and crushed you with his landing. game over.');
     
      }
      location.reload();
    }
  };


  this.talk = function(){
    console.log('player clicked talk');
    if (rooms[player.room].monster.name != null){
      console.log('player is talking to this monster: '+ rooms[player.room].monster.name);
      if(rooms[player.room].monster.response === null){
        alert(rooms[player.room].monster.name+ ' is NOT in a talking mood!');
        this.fight();
      }
      else{
        this.talking = rooms[player.room].monster.response;
        this.giveButton = true;
      }
    }
    else {
      alert('There is nothing in this room to talk to. Are you going crazy?');
    }
  };

}
