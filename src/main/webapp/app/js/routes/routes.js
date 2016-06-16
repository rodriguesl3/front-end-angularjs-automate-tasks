var routes = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');
    $stateProvider
       .state('main', {
           url: '/main',
           views: {
               'main': {
                   templateUrl: "views/main.html",
                   //controller: "mainController",
                   //controllerAs:'main'
               }
           }
       })
    $urlRouterProvider.otherwise('/main');
}
routes.$inject = ['$stateProvider', '$urlRouterProvider', ]