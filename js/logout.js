document.getElementById("bLogou").addEventListener("click", function() {
    // Limpiar el estado de inicio de sesión
    localStorage.setItem("adminLogueado", "false");

    // Verificar si el administrador está logueado
    document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("adminLogueado") === "false") {
        activarBotonesAdmin();
    }
    });


    // Ocultar botones admin
    let botonesAdmin = document.querySelectorAll(".badmin");
    botonesAdmin.forEach(function(boton) {
        boton.style.display = "none";
    });

    // Redirigir a la página de inicio de sesión (opcional)
    window.location.href = "login.html"; // Cambia "login.html" a la página de inicio de sesión correspondiente
});