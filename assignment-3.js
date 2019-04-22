function deleteTile(e) {
    var target = e.target;
    var parent = target.parentNode;
    if ((parent != tilecont) && (parent != tilecont.parentNode)) {
        parent.style.display = "none";
    }
}

var tilecont = document.getElementById("canvas");
tilecont.onclick = function(e) {deleteTile(e);};

function resetTiles(e) {
    var cont = document.getElementById("canvas");
    var tiles = cont.children;

    for(var i=0; i<tiles.length; i++) {
        tiles[i].style.display = "inline-block";
    }
}

var reset = document.getElementById("reset");
reset.onclick = function(e) {resetTiles(e);};

function clearTiles(e) {
    var cont = document.getElementById("canvas");
    var tiles = cont.children;

    for(var i=0; i<tiles.length; i++) {
        tiles[i].style.display = "none";
    }
}

var clear = document.getElementById("clear");
clear.onclick = function(e) {clearTiles(e);};

function changeTextArea() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("frm").style.display = "block";
    document.getElementById("edittext").innerHTML = document.getElementById("txt").innerHTML;
    document.getElementById("sub").type = "button";
}
function fixTextArea() {
    document.getElementById("txt").style.display = "block";
    document.getElementById("frm").style.display = "none";
    document.getElementById("txt").innerHTML = document.getElementById("edittext").value;
}
var images = [ "assignment-3-photos/avl.png", "assignment-3-photos/rbtree.jpg", "assignment-3-photos/tree2.jpg", "assignment-3-photos/tree.jpg" ];
function changeImage() {
    var x = images.shift();
    document.getElementById("image").src = x;
    images.push(x);
}

var deleteImage = function(context){
    context.parentElement.style.display = "none";
}

function clear(){
    alert("in");
    document.getElementById("deleteableList").style.display = "none";
}

function reset(){
    var children = document.getElementById("deleteableList").childNodes;
    alert(type(children));
    
}