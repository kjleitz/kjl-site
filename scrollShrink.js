function shrinkOnScroll(event) {
    var distY = window.pageYOffset || document.documentElement.scrollTop;
    var shrinkThreshold = 10;
    var shrinkList = document.getElementsByClassName("shrinkable");
    if(distY >= shrinkThreshold) {
        for(var i = 0; i < shrinkList.length; i++) {
            var nShrunk = shrinkList[i].className.search("shrunk");
            if(nShrunk === -1) {
                shrinkList[i].className += " shrunk";
            }
        }
    }
    if(distY < shrinkThreshold) {
        for(var i = 0; i < shrinkList.length; i++) {
            var nShrunk = shrinkList[i].className.search("shrunk");
            if(nShrunk > -1) {
                shrinkList[i].className = shrinkList[i].className.replace(" shrunk", "");
            }
        }
    }
}

window.onload = function(){
    window.addEventListener("scroll", shrinkOnScroll);
};
