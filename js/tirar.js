new Vue({
    el: "#app",
    data() {
        //list: ['Ashley','Andy','Andrew','Chad','Hiep','Sarah','David'],
        //chosenName: ''
        return {
            url: "https://wingedmenace.pythonanywhere.com/api",
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
                .then(data => {
                    this.datos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
    },
    methods: {
        picker: function () {
            var chosenNumber = Math.floor(Math.random() * this.list.length);
            this.chosenName = this.list[chosenNumber];
        }
    }
});