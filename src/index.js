import angular from 'angular';
import globalController from './controllers/globalController';
import gameController from './controllers/gameController';
import './main.css';
import GameSpace from './models/game-space';
import Player from './models/player';

angular.module('orcSlayer', [])
  .controller('gameController', gameController)
  .controller('globalController', globalController)
  .service('GameSpace', GameSpace)
  .service('Player', Player);