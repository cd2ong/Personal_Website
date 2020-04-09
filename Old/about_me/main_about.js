(function(){
    var app1 = angular.module('Main',['Navigation']);
    var app2 = angular.module('Main2',['Foot']);
    
     angular.element(document).ready(function() {
              var myDiv1 = document.getElementById("headerBar");
              angular.bootstrap(myDiv1, ["Main"]);

              var myDiv2 = document.getElementById("footerBar");
              angular.bootstrap(myDiv2, ["Main2"]);
    });

})();
