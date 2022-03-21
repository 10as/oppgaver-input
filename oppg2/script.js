var form = document.getElementById("form");
form.addEventListener("submit",myfunc);

function myfunc(e){
    info = document.getElementById("info")
    info.value = "hei, jeg heter "+form.navn.value;

    e.preventDefault()
}