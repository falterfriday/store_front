var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/partials/all.html.erb",
            controller: "playersController"
        })
        .when("/show_product", {
            templateUrl: "/partials/show.html.erb",
            controller: "teamsController"
        })
});