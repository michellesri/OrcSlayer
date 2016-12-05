// an index for all the controllers
import angular from 'angular';
import globalController from './globalController';
import gameController from './gameController';
// import controllers here

const controllers = angular.module('controllers', []);

// add individual controllers
controllers.controller('globalController', globalController);
controllers.controller('gameController', gameController);

export default controllers.name;
