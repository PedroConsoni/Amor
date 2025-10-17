document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático

    const nameInput = document.getElementById("name").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Nomes aceitos
    const validNames = ["Pedro", "Giovanna"];

    if (validNames.includes(nameInput)) {
        // Guarda o nome (opcional)
        localStorage.setItem("userName", nameInput);

        // Redireciona para o index.html
        window.location.href = "home/home.html";
    } else {
        // Mostra mensagem de erro
        errorMessage.style.display = "block";
    }
});
