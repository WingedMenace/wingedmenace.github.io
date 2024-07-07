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
    created() {
      this.fetchData(this.url)
    },
  },
}).mount('#app')