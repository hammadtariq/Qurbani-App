// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova']);

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("form", {
        url: "/form:type",
        templateUrl: "views/form/form.html",
        controller: "FormController"
      })
      .state("home",{
        url:"/home",
        templateUrl: "views/home/home.html",
        controller: "MainController"
      })
    .state("qurbani",{
      url:"/qurbani",
      templateUrl: "views/qurbani/qurbani.html",
      controller: "QurbaniController"
    });
    $urlRouterProvider.otherwise("home")

  });



