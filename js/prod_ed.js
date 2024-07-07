const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            carta: "",
            significado: "",
            imagen: "",
            precio: 0,
            stock: 0,
            url: 'https://wingedmenace.pythonanywhere.com/productos'+ id,
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
                stock: this.stock
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
        },
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')