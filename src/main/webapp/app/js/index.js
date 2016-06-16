var app = angular.module('app', ['ui.router', 'ngRoute']);

app.factory('mainFactory', mainFactory);

app.controller('peopleController', peopleController);

app.config(routes);
