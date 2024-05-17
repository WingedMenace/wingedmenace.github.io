//document.querySelector("footer").innerHTML = 

document.getElementById("footer").innerHTML = `
<p>Centro Holístico Nueva Luna</p>
<a href="form.html">Contáctanos</a>`;

document.querySelector("#header").innerHTML = `
<img class="Logo" src="" alt="Logo">

<nav class="nav" id="nav">
<a href="index.html">Home</a>
<a href="about.html">Sobre nosotros</a>
<a href="">Link de prueba</a>
</nav>`;

//pop-up
function userpopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

//Validar form
//Falta validar mail (con regex?)
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

//Consumo de API en VUE
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "/js/api.json", //Colocar source de la API. Puede ser archivo local en JSON
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
