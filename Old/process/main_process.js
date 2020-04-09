(function(){
    var app = angular.module('Main',['Navigation','Foot']);
    
    app.controller("PersonnaController",function(){
        this.open = false;
        this.text = "See More";
        
        this.toggleOpen = function(){
            if (this.open){
                this.open = false;
                this.text = "See More";
            }
            else {
                this.open = true;
                this.text = "Hide";
            }
        };
        
        this.isOpen = function(){
            return this.open  
        };
    });
})();
