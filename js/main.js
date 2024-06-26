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
<h1><img class="logo" src="/img/logo.png" alt="Logo">Centro Holístico Nueva Luna</h1>
    <div class="enlaces">
      <a href="index.html">Home</a>
      <a href="cartas.html">Significado Cartas</a>
      <a href="about.html">Sobre nosotros</a>
      <a href="form.html">Contacto</a>
      <a href="admininiciar.html">Iniciar Sesion<a/>
    </div>
  </nav>
</div>

<div class="navcont">
    <div class="menu-bar-movil">
        <img class="logobar" src="/img/logo.png" alt="Logo">

        <div class="burger-menu" id="burger_menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

        <div class="sliderMenu" id="sliderMenu">
            <div class="top-redes">
                <div class="enlacesMovil">
                  <a href="index.html">Home</a>
                  <a href="cartas.html">Significado Cartas</a>
                  <a href="about.html">Sobre nosotros</a>
                  <a href="form.html">Contacto</a>
                  <a href="admininiciar.html">Iniciar Sesion<a/>
                </div>
                <!-- Opcional: Agregar enlaces a redes sociales aquí -->
            </div>

            <nav class="menu-principal">
                <a href="index.html">Home</a>
                <a href="cartas.html">Significado Cartas</a>
                <a href="about.html">Sobre nosotros</a>
                <a href="form.html">Contacto</a>
                <a href="admininiciar.html">Iniciar Sesion</a>
            </nav>
        </div>
    </div>
</div>`;

//pop-up
function userpopup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

function userpopup2() {
  var popup = document.getElementById("popup2");
  popup.classList.toggle("show");
}

//Validar form
function validar() {
  let name = document.getElementById("name");
  let mail = document.getElementById("mail");
  let intencion = document.getElementById("intencion");
  let intenciond = document.getElementById("intenciond");
  let intenciont = document.getElementById("intenciont");
  let encontrar = document.getElementById("encontrar");
  let comment = document.getElementById("comment");
  let error = false;
  document.getElementById("validar_usuario").innerHTML = "&nbsp;  ";
  document.getElementById("validar_mail").innerHTML = "&nbsp; ";
  document.getElementById("validar_radiosf").innerHTML = "&nbsp;";
  document.getElementById("validar_encontrar").innerHTML = "&nbsp;";
  document.getElementById("validar_comentario").innerHTML = "&nbsp; ";

  if (name.value == "") {
    document.getElementById("validar_usuario").innerHTML = "¡No olvides tu nombre!";
    error = true;
    name.focus();
  }

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.value.match(mailFormat)) {
  }
  else {
    document.getElementById("validar_mail").innerHTML = "Coloca tu dirección de mail correctamente";
    error = true;
    mail.focus();
  }

  let x = 0
  if (intencion.checked) {
    x++;
  }
  if (intenciond.checked) {
    x++;
  }
  if (intenciont.checked) {
    x++;
  }
  if (x == 0) {
    document.getElementById("validar_radiosf").innerHTML = "No olvides seleccionar la intencion del contacto";
    error = true;
    intencion.focus();
  }


  if (encontrar.value == "Default") {
    document.getElementById("validar_encontrar").innerHTML = "Selecciona cómo nos encontraste";
    error = true;
    encontrar.focus();
  }

  if (comment.value.length < 20) {
    document.getElementById("validar_comentario").innerHTML = "¡Su comentario es muy corto!";
    error = true;
    comment.focus();
  }


  if (error == false) {
    window.alert("Datos enviados");
    window.location.reload()
  }
  else {
    window.alert("Completa los campos adecuadamente")
  }
  return !error
}

/*Consumo de API local - VUE
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
}).mount('#app')*/

//API reomta
const { createApp } = Vue
  createApp({
    data() {
      return {
        url:"https://wingedmenace.pythonanywhere.com/api",
        datos:[],
        error:false,
        cargando:true,
        id: 0,
        carta: "",
        significado: "",
        imagen: "",
        precio: 0,
        stock: 0,
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let prod = {
                carta: this.carta,
                significado: this.significado,
                imagen: this.imagen,
                precio: this.precio,
                stock: this.stock,
            }
            var options = {
                body:JSON.stringify(prod),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./prod.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
