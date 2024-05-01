//document.querySelector("footer").innerHTML = 

document.getElementById("footer").innerHTML = `
Lorem ipsum dolor sit amet.
<a href="mailto:mail@bue.gob.ar">Contacto</a>`;

document.getElementById("nav").innerHTML = `
<a href="index.html">Home</a>
<a href="about.html">Sobre nosotros</a>
<a href="form.html">Contáctanos</a>
<a href="">Link de prueba</a>
<p>Texto de ejemplo</p>`;

//pop-up
function userpopup() {
    var popup = document.querySelector("uPopup");
    popup.classList.toggle("show");
  }

//Validar form
function validar() 
{
    let name = document.getElementById("name");
    let clave = document.getElementById("clave");
    let comment = document.getElementById("comment")
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp;  ";
    document.getElementById("validar_clave").innerHTML = "&nbsp; ";
    if (name.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Deje su nombre";
        error = true;
        name.focus();
       
    }
    if (mail.value == "") {
        document.getElementById("validar_clave").innerHTML = "No olvide su mail";
        error = true;
        mail.focus();
     
    }
    if (comment.value.length <= 20) {
        document.getElementById("validar_comentario").innerHTML = "¡Su comentario es muy corto!";
        error = true;
        xommwnr.focus();
     
    }
    if (error == false) {
        
        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "&nbsp;";
        document.getElementById("comment").value = ""
        document.getElementById("validar_comentario").innerHTML = "&nbsp;";
        alert("Dato enviado")
    }
    return !error
}