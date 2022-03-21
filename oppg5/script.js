var form = document.getElementById("form");
form.addEventListener("submit", func);

function func(e) {
    //hindrer refresh etter post
    e.preventDefault()

    //Finner ut hvor mange checkboxer som er checket
    var klikket = 0;
    for (x = 0; form.mat[x] != undefined; x++) {
        if (form.mat[x].checked == true) {
            klikket++
            console.log(klikket)
        }
    }


    //skriver inn mat hvis det er huket av
    var mate = " til ";
    i = 0;
    for (x = 0; form.mat[x] != undefined; x++) {
        if (form.mat[x].checked == true) {
            //hvis boksen er chekket legger den inn verdien til boksen
            mate += form.mat[x].value;

            //hvis det ikke kommer flere markerte bokser senere velger den "og"
            if (i == klikket - 2) {
                mate += " og ";
            //hvis det kommer flere markerte bokser velger den ","
            } else if (i < klikket - 2) {
                mate += ", "
            }

            i++
        }

    }

    //legger alt inn i textareaet
    info = document.getElementById("info");
    info.innerHTML = "" +
        " Mitt navn er " + form.navn.value +
        " og jeg er  " + form.alder.value +
        " år gammel. jeg liker å drikke " + form.drikke.value +
        mate;

}