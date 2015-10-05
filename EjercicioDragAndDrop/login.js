if (sessionStorage.getItem("nombre")) {
    location.replace("index.html");
}

function login() {
    if (document.getElementById("txtUsuario").value === "") {
        alert("Nombre vacío");
        return;
    }
    sessionStorage.setItem("nombre", document.getElementById("txtUsuario").value);
    location.replace("index.html");
    
}

document.getElementById("btnOk").addEventListener("click", login);