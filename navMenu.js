var burgerIcon = document.getElementById("burger_icon");

burgerIcon.onclick = function(){
    toggleClassById("top_nav", "collapsed");
}

window.addEventListener("click", function(event){
    var ep = Element.prototype;
    
    if(ep.matches){
        // pass
    } else if(ep.webkitMatchesSelector){
        ep.matches = ep.webkitMatchesSelector;
    } else if(ep.mozMatchesSelector){
        ep.matches = ep.mozMatchesSelector;
    } else if(ep.msMatchesSelector){
        ep.matches = ep.msMatchesSelector;
    } else if(ep.oMatchesSelector){
        ep.matches = ep.oMatchesSelector;
    }
    
    if(!(event.target.matches("#burger_icon") ||
         event.target.matches("#top_nav a"))){
        remClassById("top_nav", "collapsed");
    }
});