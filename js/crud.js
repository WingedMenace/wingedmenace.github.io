//API reomta
const { createApp } = Vue
createApp({
    data() {
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
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
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
            let coso = {
                carta: this.carta,
                significado: this.significado,
                imagen: this.imagen,
            }
            var options = {
                body: JSON.stringify(coso),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./back.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                })
        },
        modificar() {
            let coso = {
                carta: this.carta,
                significado: this.significado,
                imagen: this.imagen,
            }
            var options = {
                body: JSON.stringify(coso),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")

                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        },
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')