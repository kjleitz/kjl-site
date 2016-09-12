var burgerIcon = document.getElementById("burger_icon");

burgerIcon.onclick = function(){
    toggleClassById("top_nav", "collapsed");
};

window.addEventListener("click", function(event){
    if(!event.target.matches("#burger_icon")){
        remClassById("top_nav", "collapsed");
    }
});

