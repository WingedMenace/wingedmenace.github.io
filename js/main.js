//document.querySelector("footer").innerHTML = 

document.getElementById("footer").innerHTML = `
Lorem ipsum dolor sit amet.
<a href="mailto:mail@bue.gob.ar">Contacto</a>`;

document.querySelector("#header").innerHTML = `
<img class="Logo" src="" alt="Logo">

<nav class="nav" id="nav">
<a href="index.html">Home</a>
<a href="about.html">Sobre nosotros</a>
<a href="form.html">Contáctanos</a>
<a href="">Link de prueba</a>
</nav>
<p>Texto de ejemplo</p>`;

//pop-up
function userpopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

//Validar form
function validar() {
    let name = document.getElementById("name");
    let comment = document.getElementById("comment");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp;  ";
    document.getElementById("validar_comentario").innerHTML = "&nbsp; ";
    if (name.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Deje su nombre";
        error = true;
        name.focus();

    }
    if (comment.value.length <= 20) {
        document.getElementById("validar_comentario").innerHTML = "¡Su comentario es muy corto!";
        error = true;
        comment.focus();

    }
    if (error == false) {

        document.getElementById("name").value = ""
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";
        document.getElementById("comment").value = ""
        document.getElementById("validar_comentario").innerHTML = "&nbsp;";
        window.alert("Dato enviado");
        
    }
    else{
        window.alert("Completa los campos adecuadamente")
    }
    return !error
}