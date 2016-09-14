// I'm doing this instead of using classList because IE is terrible.
// Also, I know JQuery would be easier, but I'm doing it manually because:
//      A. I'm learning, and I want to do everything from scratch, and
//      B. I don't want to rely on importing overkill libraries just to
//         implement only a tiny portion of the functionality.
// Also, yeah I know redundant spaces aren't always removed from elements that
// have multiple togglable hooks and are toggled repeatedly back and forth, but
// they almost always eventually are, and it's no biggie. So spaces sometimes 
// build up in the class attribute, who cares? They don't affect parsing. It's
// all gooood.
// Issue: They'll replace the interior of a class word that *contains* the
// (tog|add|rem)Class, which is bad. 

function toggleClassByClassName(togHook, togClass) {
    var togList = document.getElementsByClassName(togHook);
    for(var i = 0; i < togList.length; i++) {
        var nToggled = togList[i].className.indexOf(togClass);
        if(nToggled === -1) {
            togList[i].className += (" " + togClass);
        } else {
            togList[i].className = togList[i].className.replace(togClass, "").trim();
        }
    }
}

function toggleClassById(togHook, togClass) {
    var togElem = document.getElementById(togHook);
    var nToggled = togElem.className.indexOf(togClass);
    if(nToggled === -1) {
        togElem.className += (" " + togClass);
    } else {
        togElem.className = togElem.className.replace(togClass, "").trim();
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
            remList[i].className = remList[i].className.replace(remClass, "").trim();
        }
    }
}

function remClassById(remHook, remClass) {
    var remElem = document.getElementById(remHook);
    var nRemoved = remElem.className.indexOf(remClass);
    if(nRemoved > -1) {
        remElem.className = remElem.className.replace(remClass, "").trim();
    }
}
