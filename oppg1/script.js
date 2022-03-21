klikk = document.getElementById("klikk");
navn =  document.getElementById("navn");

klikk.onclick = function(){
    console.log('hei, jeg heter '+ navn.value)
}