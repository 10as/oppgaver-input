var form = document.getElementById("form");
form.addEventListener("submit",func)

function func(e){
    info = document.getElementById("info")
    info.innerHTML = +
    " navn: "+ form.navn.value +
    " alder: "+ form.alder.value +
    " drikke: "+ form.drikke.value ;

    e.preventDefault()
}