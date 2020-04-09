(function(){
    var app = angular.module('Main',['Navigation','Foot','ngCookies']);
    var page = getURLParameter('page');
    
    app.controller("ImageController",['$http','$cookies',function($http,$cookies){
        if ($cookies.get('pageNum')  == null || isNaN(Number($cookies.get('pageNum')))){
            if (!page){
                $cookies.put('pageNum', 1);
                this.page = 1;
            }
            else{
                this.page = Number(page);
                $cookies.put('pageNum', Number(page)); 
            }
        }else{
            this.page = Number($cookies.get('pageNum'));
        }
        
        this.index = ((this.page-1)*9);
        this.test =0;
        var images = this;
        images.content= [ ];
        images.numOfPages = 0;
        
        $http.get('../json/galleryContent.json').success(function(data){
            images.content = data;
            images.numOfPages = (Math.ceil(data.length/9));
            if (this.page > images.numOfPages){
                this.page = images.numOfPages;
            }else if (this.Page <= 0){
                this.page = 1;
            }
            this.index = ((this.page-1)*9);
        });
        
        this.goto = function(value){
            this.test = value;
            if (value <= images.numOfPages && value >= 1){
                this.page = value;
                $cookies.put('pageNum', value); 
                this.index = ((this.page-1)*9);
            }
        };
        
        this.disabledBack = function(){
            return (this.page <= 1);
        };
        
        this.disabledForward = function(){
            return (this.page >= images.numOfPages);
        };
        
        this.portrait = true;
        this.open = false;
        this.selectedIndex = 0;
        this.lrgImage = "";
        
        this.setImage = function(index){
            this.portrait = this.isPortrait(images.content[index].large_size[0],images.content[index].large_size[1]);
            this.lrgImage = images.content[this.selectedIndex].url.full;
            this.selectedIndex = index;
        };
        
        this.isPortrait = function(width,height){
            return (height > width)
        };
        
        this.popUp = function(){
            this.open = true;
        };
        
        this.close = function(){
            this.open = false;
        };

    }]);
    
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
    };
    
        
})();
