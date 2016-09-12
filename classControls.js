// I'm doing this instead of using classList because IE is terrible

function toggleClassByClassName(togHook, togClass) {
    var togList = document.getElementsByClassName(togHook);
    for(var i = 0; i < togList.length; i++) {
        var nToggled = togList[i].className.indexOf(togClass);
        if(nToggled === -1) {
            togList[i].className += (" " + togClass);
        } else {
            togList[i].className = togList[i].className.replace(togClass, "");
        }
    }
}

function toggleClassById(togHook, togClass) {
    var togElem = document.getElementById(togHook);
    var nToggled = togElem.className.indexOf(togClass);
    if(nToggled === -1) {
        togElem.className += (" " + togClass);
    } else {
        togElem.className = togElem.className.replace(togClass, "");
    }
}

function addClassByClassName(addHook, addClass) {
    var addList = document.getElementsByClassName(addHook);
    for(var i = 0; i < addList.length; i++) {
        var nAdded = addList[i].className.indexOf(addClass);
        if(nAdded === -1) {
            addList[i].className += (" " + addClass);
        }
    }
}

function addClassById(addHook, addClass) {
    var addElem = document.getElementById(addHook);
    var nAdded = addElem.className.indexOf(addClass);
    if(nAdded === -1) {
        addElem.className += (" " + addClass);
    }
}

function remClassByClassName(remHook, remClass) {
    var remList = document.getElementsByClassName(remHook);
    for(var i = 0; i < remList.length; i++) {
        var nRemoved = remList[i].className.indexOf(remClass);
        if(nRemoved > -1) {
            remList[i].className = remList[i].className.replace(remClass, "");
        }
    }
}

function remClassById(remHook, remClass) {
    var remElem = document.getElementById(remHook);
    var nRemoved = remElem.className.indexOf(remClass);
    if(nRemoved > -1) {
        remElem.className = remElem.className.replace(remClass, "");
    }
}
