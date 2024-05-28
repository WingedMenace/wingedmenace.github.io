//document.querySelector("footer").innerHTML = 

document.getElementById("footer").innerHTML = `
<h3>Centro Holístico Nueva Luna</h3>
<a href="https://wa.me/+5493487660068?text=MENSAJE_OPCIONAL" target="_blank" class="whatsapp-button" >
<i class="fa-solid fa-phone fa-2x"></i>
</a>
<a class="boton" href="form.html">Contáctanos</a>`;

document.querySelector("#header").innerHTML = `
<div class="navcont">
<nav class="nav" id="nav">
<img class="logo" src="/img/logo.png" alt="Logo">
<h1>Centro Holístico Nueva Luna</h1>
    <div class="enlaces">
    <a href="index.html">Home</a>
    <a href="cartas.html">Significado Cartas</a>
    <a href="about.html">Sobre nosotros</a>
    <a href="form.html">Contacto</a>
    </div>
  </nav>
</div>`;

//pop-up
function userpopup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

//Validar form
function validar() {
  let name = document.getElementById("name");
  let mail = document.getElementById("mail");
  let comment = document.getElementById("comment");
  let error = false;
  document.getElementById("validar_usuario").innerHTML = "&nbsp;  ";
  document.getElementById("validar_mail").innerHTML = "&nbsp; ";
  document.getElementById("validar_comentario").innerHTML = "&nbsp; ";
  if (name.value == "") {
    document.getElementById("validar_usuario").innerHTML = "¡No olvides tu nombre!";
    error = true;
    name.focus();

  }
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.value.match(mailFormat)) {
    return true
  } 
  else {
    document.getElementById("validar_mail").innerHTML = "Coloca tu dirección de mail correctamente";
    error = true;
    name.focus();

  }
  if (comment.value.length < 20) {
    document.getElementById("validar_comentario").innerHTML = "¡Su comentario es muy corto!";
    error = true;
    comment.focus();

  }
  if (error == false) {

    document.getElementById("name").value = ""
    document.getElementById("validar_usuario").innerHTML = "&nbsp;";
    document.getElementById("mail").value = ""
    document.getElementById("validar_mail").innerHTML = "&nbsp;";
    document.getElementById("comment").value = ""
    document.getElementById("validar_comentario").innerHTML = "&nbsp;";
    window.alert("Datos enviados");

  }
  else {
    window.alert("Completa los campos adecuadamente")
  }
  return !error
}

//Consumo de API en VUE
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "/js/api.json", //Es una API local
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.datos = data
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },
  created() {
    this.fetchData(this.url)
  }
}).mount('#app')
