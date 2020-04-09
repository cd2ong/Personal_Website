(function(){
    var app = angular.module("Navigation",[]);
    
    app.directive("naviBar",function(){
        return{
            restrict: "E",
            templateUrl: "../navigation/navigation-bar.html",
            controller: ['$http',function($http){
                this.dropdown = -1;
                this.onMenu = false;
                this.onHeader = false;
                
                var dropdown = this;
                dropdown.processDropdown = [ ];
                dropdown.aboutDropdown = [ ];
                dropdown.faqDropdown = [ ];
                
                $http.get('../json/dropdownLists.json').success(function(data){
                    dropdown.processDropdown = data.process;
                    dropdown.aboutDropdown = data.about;
                    dropdown.faqDropdown = data.faq;
                });
                
                this.changeDropdown = function(num){
                    this.dropdown = num;
                };
                
                this.checkDropdown = function(num){
                    return (this.dropdown === num);
                };
                
                this.changeOnMenu = function(value){
                    this.onMenu = value;
                };
                
                this.changeOnHeader = function(value){
                    this.onHeader = value;
                };
                
                this.onDropdown = function(){
                    return (this.onHeader||(this.onMenu));
                };
            
            }],
            controllerAs: "navi"
        };
    });
    
})();