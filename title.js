if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "c", "co", "col", "cold", "colds", "coldse", "coldsen", "coldsens", "coldsense", "coldsens", "coldsen", "coldse", "colds", "cold", "col", "co", "c"];
var titleText1 = ["a", "as", "asx", "asxn", "asxn", "asxng", "asxnge", "asxng", "asxn", "asx", "as", "a"]
function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText1[x++%titleText1.length];

}
