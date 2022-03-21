
var form = document.getElementById("form");
form.addEventListener("submit",myfunc);

function myfunc(e){
    var data = form.elements;
    console.log("hei, jeg heter "+form.navn.value);

    e.preventDefault()
}