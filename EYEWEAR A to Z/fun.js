let navVar = document.querySelector('.navbar');
let runningvar = window.pageYOffset;


window.onscroll = function () {

    let mainevar = window.pageYOffset;

    if (runningvar > mainevar) {
        navVar.style.top = "10px";
        navVar.style.opacity = "0";
    }
    else {
        navVar.style.top = "-10px";
        navVar.style.opacity = "1";
        navVar.style.transition = ". 3s linear";
    }
    runningvar = mainevar;

}