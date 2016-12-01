import angular from 'angular';
import './main.css';
import controllers from './controllers'; //find the index.js and import contents
import rooms from './models/rooms';
import player from './models/player';

console.log('rooms: ' , rooms);
console.log('player: ', player);
angular.module('orcSlayer', [controllers]);
