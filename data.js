const buttonLeft = document.getElementById('slideLeft');
const buttonRight = document.getElementById('slideRight');

buttonRight.onclick = function () {
    document.getElementById('options').scrollLeft += 200
};

buttonLeft.onclick = function () {
    document.getElementById('options').scrollLeft += -200
};

