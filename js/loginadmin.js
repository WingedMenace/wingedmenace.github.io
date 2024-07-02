let usuariosregistrados = [
    {emailadmin: "admin@admin.com", passwordadmin: "admin"},
    {emailadmin: "user@user.com", passwordadmin: "user"}
];

// Función para activar los botones de admin
function activarBotonesAdmin() {
    let botonesAdmin = document.querySelectorAll(".badmin");
    botonesAdmin.forEach(function(boton) {
        boton.style.display = "block";
    });
}

// Verificar si el administrador está logueado
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("adminLogueado") === "true") {
        activarBotonesAdmin();
    }
});

document.getElementById("adminlogin").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener los valores de email y contraseña
    let emailadmin = document.getElementById("emailadmin").value;
    let passwordadmin = document.getElementById("passwordadmin").value;

    // Verificar credenciales
    let adminValido = usuariosregistrados.find(function(admin) {
        return admin.emailadmin === emailadmin && admin.passwordadmin === passwordadmin;
    });

    if (adminValido) {
        // Guardar el estado de inicio de sesión
        localStorage.setItem("adminLogueado", "true");

        // Activar botones admin
        activarBotonesAdmin();

        // Redirigir a la página del administrador
        window.location.href = "index.html";
    } else {
        let errorMenssage = document.getElementById("error-message");
        errorMenssage.textContent = "Usuario o Contraseña Incorrecto. Por Favor, intentalo de nuevo";
    }
});
