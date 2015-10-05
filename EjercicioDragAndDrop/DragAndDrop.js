
if (!sessionStorage.getItem("nombre")) {
    location.replace("login.html");
}


var objetoTrasladado = undefined;

function drag(evento) {
    objetoTrasladado = evento.target.id;
    //evento.dataTransfer.setData("objeto", evento.target.id);
}

function allowDrop(evento) {
    evento.preventDefault();
}

function drop(evento) {
    evento.preventDefault();
    //var data = evento.dataTransfer.getData("objeto");
    var data = objetoTrasladado;
    document.getElementById("divDestino").appendChild(document.getElementById(data));
    objetoTrasladado = undefined;
}

var imgs = document.querySelectorAll("img");
var destino = document.querySelector("#divDestino");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart", drag);
}

destino.addEventListener("dragover", allowDrop);
destino.addEventListener("drop", drop);