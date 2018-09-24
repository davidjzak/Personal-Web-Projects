   $(document).ready(function(){
  $("span").hover(function(){
    
    this.className = " rubber";
        $(this).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
        this.className = "";
         });  
         
    })
  });

