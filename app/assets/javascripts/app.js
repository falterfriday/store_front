var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider,  $httpProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/partials/all.html.erb",
            controller: "categoriesController"
        })
        .when("/show_product/:id", {
            templateUrl: "/partials/show.html.erb",
            controller: "productsController"
        })
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});