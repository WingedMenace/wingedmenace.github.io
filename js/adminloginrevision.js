
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("adminLogueado") === "true") {
        let botonesAdmin = document.querySelectorAll(".badmin");
        botonesAdmin.forEach(function (boton) {
            boton.style.display = "block";
        });
    }
});
