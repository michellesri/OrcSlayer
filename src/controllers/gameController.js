gameController.$inject = ['GameSpace', 'Player'];

export default function gameController(map, player) { //eslint-disable-line no-unused-vars

  player.setLocation(map.startLocation);
  
  this.prefix = 'You wake up in a dungeon with a pounding headache.  As your eyes focus you notice that the room around you,';
  this.roomDescription = map.rooms[player.room].description;
  this.directions = ['N', 'E', 'S', 'W'];
  this.moveButtons = true;
  this.gameOver = false;
  this.life = player.life;
  this.alert = null;
  this.progress = 1;
  var getRandomNum = function(){
    return Math.floor(Math.random() * 4) + 1;
  };

  this.newView = function() {
    this.life = player.life;
    this.alert =null;
    this.talking=null;
    this.roomDescription = map.rooms[player.room].description;

    if (map.rooms[player.room].item) {
      this.equipButton = true; //if item is != null, equipButton is true.
      this.itemText = map.rooms[player.room].item.text;
    }
    else {
      this.equipButton = false;
      this.itemText = null;
    }

    let isAlive = false;

    if (map.rooms[player.room].monster) {
      isAlive = !!(map.rooms[player.room].monster.alive);
      if(isAlive){
        this.monsterText= map.rooms[player.room].monster.text;
      }
      else {
        if(map.rooms[player.room].monster.defeat){
          this.monsterText= map.rooms[player.room].monster.defeat;
        } 
      }
    }
    else {
      this.monsterText= null;
    }

    this.runButton = isAlive;
    this.fightButton = isAlive;
    this.talkButton = isAlive;
    this.moveButtons = !isAlive;
    this.giveButton = false;

  };


  this.move = function(direction){
    console.log('moved in this direction', direction);
    if (map.rooms[player.room][direction] != null){
      console.log('Player is moving from room ', player.room);
      player.room = map.rooms[player.room][direction];
      console.log(' into ', player.room);
      if(player.progress.indexOf(player.room) !== 0){
        player.progress.push(player.room);
        this.progress = player.progress.length;
      }
      var entryPrefixes = ['You open the door and enter', 'Passing through the doorway you find yourself in', 'The room you entered is', 'As you close the door you make note of the room around you;'];
      var randomNum = getRandomNum();

      this.prefix = entryPrefixes[(randomNum-1)];
      this.newView();
    }
    else {
      this.alert= 'You cannot move in that direction.';
    }
    console.log('I am in ', player.room);

  };

  this.equip = function(){
    var dropped = player.item;
    player.item=map.rooms[player.room].item;
    map.rooms[player.room].item=dropped;
    if (dropped.name != null){
      map.rooms[player.room].item.text = '  A '+dropped.name+' lies on the ground.';
    }
    else{
      map.rooms[player.room].item = dropped;
    }
    this.playerItemName = player.item.name;
    this.playerItemStrength = player.item.strength;
    this.newView();
  };

  this.fight = function(){
    let playerRoom = player.room;
    let monster = map.rooms[playerRoom].monster;
      // var randomNum = getRandomNum();
      // var playerStrength = item.strength*randomNum;
      // Cheat code:
    var playerStrength = 100;
    if (playerStrength >= monster.strength){
      this.alert =`Congratulations!  You defeated the ${monster.name}.`;
      monster.alive = false;
      map.rooms[playerRoom].item = monster.item; //TODO: consider what happens when there's already an item in the room.
      monster.item = null;
      this.prefix = 'As your bloodlust settles down, you notice that you are still in';
      this.newView();
    }
    else{
      this.alert =`Alas!  You were killed by the ${monster.name}.`;
      this.endGame();
    }

  };

  this.run = function() {

    let playerRoom = player.room;
    let monster = map.rooms[playerRoom].monster;
    console.log('clicked run');
    console.log('is running away from this monster: '+ monster.name);
    var randomRoom = map.rooms[playerRoom][this.directions[getRandomNum()]];
    if(randomRoom != null) {
      playerRoom = randomRoom;
      this.newView();
    } else {
      this.alert= 'There was no room in that direction. ran into a wall and died. game over.';
      this.endGame();
    }

  };

  this.give = function() {
    let playerRoom = player.room;
    let monster = map.rooms[playerRoom].monster;

    let doesOrcWantItem = player.item.name === monster.wants && monster.name === 'Orc';

    if(doesOrcWantItem) {
      player.item = {
        name: 'Excaliborc',
        strength: 30,
        description: 'blahblhablha'
      };
      this.playerItemName = player.item.name;
      this.playerItemStrength = player.item.strength;
      this.prefix = 'The tension in the room is no longer there. ';
      map.rooms[playerRoom].description = ' a now, much-happier scene; ';
      map.rooms[playerRoom].monster.defeat= 'there is now a happy orc laying down and eating the juicy turkey drumstick';
      map.rooms[playerRoom].monster.alive = false;
      this.roomDescription = '';
      this.monsterText ='  The hungry orc is touched by your generous gift of food.';
      this.talking = 'Orc: young traveler, i am very happy with this gift. please take this thousand year old sword: Excaliborc. may it guide you in your journey.';
      this.runButton = false;
      this.fightButton =false;
      this.talkButton = false;
      this.moveButtons = true;
      this.giveButton = false;

    } else {
      if(player.item === map.rooms[playerRoom].monster.wants){
        this.alert('The' + map.rooms[playerRoom].monster.name + ' happily takes the '+ map.rooms[playerRoom].monster.wants + ' from you.');
      }
      else if(player.item.name === null) {
        this.talking = 'FOOLISH ONE. are you trying to trick me by giving me nothing!?!';
        this.alert = `The ${monster.name} immediately attacks you.  You are unable to defend yourself in time and succumb to their attack.  Game over.`;
        this.endGame();
      } else {
        this.alert = `The ${monster.name} mistook your attempt to hand them a gift as an attack and immediately attacks you.  You are unable to defend yourself in time and succumb to their attack.  Game over.`;
        this.endGame();
      }
    }
  };


  this.talk = function(){

    let monsterName = map.rooms[player.room].monster.name;
    let monsterResponse = map.rooms[player.room].monster.response;
    if(monsterResponse === null){
      alert(monsterName+ ' is NOT in a talking mood!  You engage in battle.');
      this.fight();
    }
    else if(monsterName === 'elephant'){
      this.talking = 'Thank you for acknowledging the elephant in the room.';
      this.alert = 'Pleased that you acknowledged him, the elephant gives you some ivory armor that adds 10 life to your life total.  You do not ask where it comes from';
      player.life += 10;
      this.life = player.life;
      this.moveButtons =true;
      this.talkButton = false;
      this.fightButton = false;
      this.runButton = false;
    }
    else{
      this.talking = monsterResponse;
      this.giveButton = true;
    }
  };

  this.endGame = function(){
    this.gameOver = true;
    this.moveButtons =false;
    this.talkButton = false;
    this.giveButton = false;
    this.fightButton = false;
    this.runButton = false;
    console.log(player.progress);
  };

  this.newGame = function(){
    location.reload();
  };
}
