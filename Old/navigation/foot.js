    (function(){
        var app = angular.module("Foot",[]);

        app.directive("foot",function(){
            return{ 
                restrict: "E",
                templateUrl: "../navigation/footer.html"
            };
        });
    })();