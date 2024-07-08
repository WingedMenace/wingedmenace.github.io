console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: "",
            carta: "",
            significado: "",
            imagen: "",
            precio: 0,
            stock: 0,
            url: 'https://wingedmenace.pythonanywhere.com/productos'+id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.carta = data.carta
                    this.significado = data.significado
                    this.imagen = data.imagen
                    this.stock = data.stock
                    this.precio = data.precio
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let producto = {
                carta: this.carta,
                significado: this.significado,
                imagen: this.imagen,
                precio: this.precio,
                stock: this.stock,
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./prod.html";        
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')

//HTML
document.getElementById("footer").innerHTML = `
<h3>Centro Holístico Nueva Luna</h3>
<a href="https://wa.me/+5493487660068?text=MENSAJE_OPCIONAL" target="_blank" class="whatsapp-button" >
<i class="fa-brands fa-whatsapp"></i>
</a>
<a class="boton" href="form.html">Contáctanos</a>
<a class="redesSociales" href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
<a class="redesSociales" href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
<a class="redesSociales" href="https://www.linkedin.com/?trk=guest_homepage-jobseeker_nav-header-logo" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
<a class="redesSociales" href="https://wa.me/+5493487660068?text=MENSAJE_OPCIONAL" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>`;

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
      <a class="badmin" href="prod_new.html">Agregar Producto<a/>
      <a class="badmin" href="prod.html">Productos<a/>
    </div>
  </nav>
</div>

<div class="navcont">
    <div class="menu-bar-movil">
    <div>
      <img class="logobar" src="/img/logo.png" alt="Logo">

        <div class="burger-menu" id="burger_menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
    </div>
        <div class="sliderMenu" id="sliderMenu">
            <div class="top-redes">
                <div class="enlacesMovil">
                  <a href="index.html">Home</a>
                  <a href="cartas.html">Significado Cartas</a>
                  <a href="about.html">Sobre nosotros</a>
                  <a href="form.html">Contacto</a>
                  <a href="admininiciar.html">Iniciar Sesion<a/>
                  <a class="badmin" href="prod_new.html">Agregar Producto<a/>
                  <a class="badmin" href="prod.html">Productos<a/>
                </div>
            </div>
        </div>
    </div>
</div>`;