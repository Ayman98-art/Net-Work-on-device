//***********Start internet ****************//
let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

function onLine(){
    title.innerHTML = "Online Now";
    title.style.color = "green";
    ul.classList.add("hide");
    reload.classList.add("hide");
}

function offLine(){
    title.innerHTML = "Offline Now!";
    title.style.color = "#666"
    ul.classList.remove("hide");
    reload.classList.remove("hide");
}

window.onload = function(){
// if u have internet on your device
if(window.navigator.onLine){
    onLine();
    }
else{
    offLine();
    }
}

window.addEventListener("online" ,function(){
    onLine();
})
window.addEventListener("offline" ,function(){
    offLine();
})

// when i click on btn , it will reload the page
reload.addEventListener("click", function(){
    window.location.reload();
})
//***********End internet ****************//