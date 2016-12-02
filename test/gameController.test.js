/* globals angular, chai */
const { assert } = chai;

describe( 'gameController', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  it ('player moves from one room to another', () => {
    // $scope.player = { room: 1 }; // player starts in room 1
    // $scope.rooms = [
    //   { N: null, S: 1, E: null, W: null },
    //   { N: 0, S: null, E: null, W: null }
    // ];
    var gc = $controller('gameController', { $scope });
    gc.move('N');
    assert.equal($scope.player.room, 0); // player should have moved to room 0
  });

  it ('player can pick up an item', () => {
    var gc = $controller('gameController', { $scope });
    $scope.player.room = 0;
    gc.equip();
    assert.equal($scope.player.item.name, 'turkey drumstick');
  });

  it ('player drops current item if she picks up a new one', () => {
    var gc = $controller('gameController', { $scope });
    $scope.player.room = 2;
    // console.log('\nI am about to equip!\n');
    // console.log('>>> Before equip player ', $scope.player, ' room ', $scope.rooms);
    gc.equip();
    // console.log('>>> After equip player ', $scope.player, ' room ', $scope.rooms);
    assert.equal($scope.player.item.name, 'sword');    
  });

});