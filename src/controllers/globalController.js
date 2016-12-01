globalController.$inject = ['$scope'];

import player from '../models/player';
import rooms from '../models/rooms';

export default function globalController($scope){ //eslint-disable-line no-unused-vars
  console.log('in globalController');
  $scope.activeTab = {
    showIntro: true,
    showInstructions: false,
    showGame: false
  };

  $scope.roomDescription = rooms[player.room].description;

}
