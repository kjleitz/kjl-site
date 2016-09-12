function shrinkOnScroll(event) {
    var distY = window.pageYOffset || document.documentElement.scrollTop;
    var shrinkThreshold = 10;
    if(distY >= shrinkThreshold) {
        addClassByClassName("shrinkable", "shrunk");
    }
    if(distY < shrinkThreshold) {
        remClassByClassName("shrinkable", "shrunk");
    }
}

window.onload = function(){
    window.addEventListener("scroll", shrinkOnScroll);
};
