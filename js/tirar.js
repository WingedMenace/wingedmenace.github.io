new Vue({
    el: "#app",
    data() {
         return {
            url: "https://prueba1ivo.pythonanywhere.com/api",
            //url: "https://wingedmenace.pythonanywhere.com/api",
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
                .then(data => {
                    this.datos = data;
                    this.cargando = false
                })
        },
        tirar () {
            var chosenNumber = Math.floor(Math.random() * this.data.length);
            this.id = this.list[chosenNumber];
            alert('{{chosenNumber.id}}')
            //this.chosenName = this.list[chosenNumber];
        }
    }
});