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
}


function btnPrev() {
    index--;

    if (index == -1) index = items.length -1;
    
    console.log(index);

    showItem();
    reset();

}

next.onclick = btnNext;
prev.onclick = btnPrev;

function showItem() {
    for(var i = 0; i < items.length; i++) {     
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



