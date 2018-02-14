var app = angular.module('netflix', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/cancelanytime", {templateUrl: "js/core/views/cancelanytime.html"})
    .when("/watchanywhere", {templateUrl: "js/core/views/watchanywhere.html"})
    .when("/pickprice", {templateUrl: "js/core/views/pickprice.html"})
    .otherwise({redirectTo: "/"})
});