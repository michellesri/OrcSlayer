// an index for all the controllers
import angular from 'angular';
import globalController from './globalController';
// import controllers here

const controllers = angular.module('controllers', []);

// add individual controllers
controllers.controller('globalController', globalController);

export default controllers.name;
