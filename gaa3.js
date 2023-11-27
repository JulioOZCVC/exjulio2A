function validateForm(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Expresiones regulares para validar el formato del correo electrónico y la contraseña
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    // Validar el nombre
    if (name.trim() === "") {
        showError("nameError", "Por favor, ingresa tu nombre.");
    } else {
        hideError("nameError");
    }

    // Validar el correo electrónico
    if (!emailRegex.test(email)) {
        showError("emailError", "Por favor, ingresa un correo electrónico válido.");
    } else {
        hideError("emailError");
    }

    // Validar la contraseña
    if (!passwordRegex.test(password)) {
        showError("passwordError", "La contraseña debe contener al menos 8 caracteres, incluyendo al menos un número.");
    } else {
        hideError("passwordError");
    }

    // Si todos los campos son válidos, puedes enviar el formulario o realizar otras acciones
    if (name.trim() !== "" && emailRegex.test(email) && passwordRegex.test(password)) {
        alert("Formulario enviado correctamente.");
        // Aquí puedes enviar el formulario o realizar otras acciones necesarias
    }
}

function showError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function hideError(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = "";
}
