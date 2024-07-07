//API reomta
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://wingedmenace.pythonanywhere.com/api",
      datos: [],
      error: false,
      cargando: true,
      id: "",
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
          this.stock = data.stock;
          this.cargando = false
        })
        .catch(err => {
          console.error(err);
          this.error = true
        })
    },
    tirar() { //Ver
      let coso = api.stock - 1
      fetch(`https://wingedmenace.pythonanywhere.com/api/${api.stock}`, {
        method: 'PUT',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stock: coso
        })
          .then(function () {
            alert("Has tirado una carta")
          })
          .catch(err => {
            console.error(err);
            alert("Error")
          })
      })
    },
    eliminar(id) {
      const url = this.url + '/' + id;
      var options = {
        method: 'DELETE',
      }
      fetch(url, options)
        .then(res => res.text())
        .then(res => {
          alert('Registro Eliminado')
          location.reload();
        })
    },
    grabar() {
      let prod = {
        carta: this.carta,
        significado: this.significado,
        imagen: this.imagen,
        precio: this.precio,
        stock: this.stock,
      }
      var options = {
        body: JSON.stringify(prod),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
      }
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado")
          window.location.href = "./prod.html";
        })
        .catch(err => {
          console.error(err);
          alert("Error al Grabar")
        })
    },
  },
  created() {
    this.fetchData(this.url)
  },
}).mount('#app')