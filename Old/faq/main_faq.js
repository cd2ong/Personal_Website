(function(){
    var app = angular.module('Main',['Navigation','Foot']);

    app.controller("PageController",function(){
        this.number = 4;
    });
    
})();
