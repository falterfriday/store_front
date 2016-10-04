var app = angular.module('app', ['ngMaterial', 'ngRoute', 'ngCookies']);
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
        .when("/checkout", {
            templateUrl: "/partials/checkout.html",
            controller: "checkoutController"
        })
        .when("/admin", {
            templateUrl: "/partials/admin_login.html",
            controller: "adminUsersController"
        })
        .when("/admin/orders", {
            templateUrl: "/partials/admin_all_order.html",
            controller: "adminOrdersController"
        })
        .when("/admin/orders/show/:id", {
            templateUrl: "/partials/admin_show_order.html",
            controller: "adminOrdersController"
        })
        .when("/admin/products", {
            templateUrl: "/partials/admin_products.html",
            controller: "adminProductsController"
        })

    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});