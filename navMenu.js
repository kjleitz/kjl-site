var burgerIcon = document.getElementById("burger_icon");

burgerIcon.onclick = function(){
    toggleClassById("top_nav", "expanded");
};

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
             // Maybe I should just use the class hook and collapse all the
             // elements that are "expandable", in case I decide to make more
             // dropdowns... not necessary right now.
             remClassById("top_nav", "expanded");
         }
});