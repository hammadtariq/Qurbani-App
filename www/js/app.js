// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("options", {
        url: "/options",
        templateUrl: "views/options/options.html",
        controller: "OptionController"
      })
      .state("home",{
        url:"/home",
        templateUrl: "views/home/home.html",
        controller: "MainController"
      });
    $urlRouterProvider.otherwise("home")

  });

