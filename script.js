var prev = document.getElementById("prev");
var next = document.getElementById("next");

var items = document.getElementsByClassName("dessert");

var index = 0;

function btnNext() {
    index++;

    // 如果編號超出範圍，會回歸為0
    if (index == items.length) index = 0;

    console.log(index);

    showItem();
    reset();
    switchButton();
}


function btnPrev() {
    index--;

    if (index == -1) index = items.length - 1;

    console.log(index);

    showItem();
    reset();

    // 必須加SWITCHBUTTON，不然會錯亂
    switchButton();
}

next.onclick = btnNext;
prev.onclick = btnPrev;

function showItem() {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("d-active");
    }

    items[index].classList.add("d-active");
}

var duration = document.getElementById("dessert-slider").getAttribute("data-slider-duration");

var auto = setInterval(btnNext, duration);

function reset() {
    clearInterval(auto);
    auto = setInterval(btnNext, duration);
}

var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        index = this.getAttribute("data-slider-item") - 1;

        showItem();
        reset();
        switchButton();
    }
}

function switchButton() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("btn-active");
    }

    btns[index].classList.add("btn-active");
}

