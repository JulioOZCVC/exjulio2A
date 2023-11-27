function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Verificar credenciales (esto es solo un ejemplo, debes implementar la lógica de autenticación real)
    if (username === "usuario" && password === "contrasena") {
        // Redirigir a la página de inicio o realizar otras acciones necesarias
        window.location.href = "inicio.html";
    } else {
        errorMessage.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
}
