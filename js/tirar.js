const { createApp } = Vue
createApp({
    data() {
         return {
            url: "https://prueba1ivo.pythonanywhere.com/cartas",
            datos: [],
            error: false,
            id: "",
            carta: "",
            significado: "",
            imagen: "",
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
        tirar () {
            var chosenNumber = Math.floor(Math.random() * this.data.length);
            this.id = this.list[chosenNumber];
            alert('{{chosenNumber.id}}')
            //this.chosenName = this.list[chosenNumber];
        }
    }
});