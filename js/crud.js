//API remota
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://wingedmenace.pythonanywhere.com/cartas",
      datos: [],
      error: false,
      id : 0,
      carta : '',
      significado : '',
      imagen : '',
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
            // para el boton modificar
            this.id = data.id
            this.carta = data.carta;
            this.significado = data.significado;
            this.imagen = data.imagen;
            

          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    },
    eliminar(id) {
      const url = this.url + '/' + id;
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
    modificar() {
      let alumno = {
        carta: this.carta,
        significado: this.significado,
        imagen: this.imagen,
        
      }
      var options = {
        body: JSON.stringify(alumno),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
      }
      fetch(this.url + "/" + location.search.substr(4), options)
        .then(function () {
          alert("Registro modificado")
          window.location.href = "./CRUDalumno.html"; 
        })
        .catch(err => {
          console.error(err);
          alert("Error al Modificar")
        })
    },

    grabar() {
      let alumno = {
        carta: this.carta,
        significado: this.significado,
        imagen: this.imagen,
        
      }
      var options = {
        body: JSON.stringify(alumno),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
      }
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado")
          window.location.href = "./CRUDalumno.html";  // recarga productos.html
        })
        .catch(err => {
          console.error(err);
          alert("Error al Grabar")  // puedo mostrar el error tambien
        })
    }


  },
  created() {  // created() se ejecuta cada vez que se crea el objeto VUE
    if (location.search.substr(4) === "") // si no viene de la modificacion
      url = this.url
    else
      url = this.url + "/" + location.search.substr(4)  // para la modificacion
    // si viene de la modificacion le agrego "/<id>" del producto

    this.fetchData(url)
  }
}).mount('#app')
