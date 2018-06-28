var movingIndex = 0;
function carousel() {
    "use strict";
    var i, numberofImages;
    numberofImages = document.getElementsByClassName("animation");
    for (i = 0; i < numberofImages.length; i = i + 1) {
        numberofImages[i].style.display = "none";
    }
    movingIndex = movingIndex + 1;
    if (movingIndex > numberofImages.length) {
        movingIndex = 1;
    }
    numberofImages[movingIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
carousel();
