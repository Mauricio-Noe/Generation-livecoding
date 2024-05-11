formulario = document.querySelector(".formulario");

formulario.onsubmit = function(evento) {
  evento.preventDefault();
  
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadSelect = formulario.elements[2];

  var nombre = nombreInput.value;
  var edad = edadInput.value;

  var indiceNacionalidad = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[indiceNacionalidad].value;
  
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elementolista");
  lista.appendChild(elementoLista);


  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    span.textContent = descripcion + ": ";
    var input = document.createElement("input");
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(document.createElement("br"));
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar invitado";
  botonEliminar.onclick = function() {
    elementoLista.remove();
  };
  elementoLista.appendChild(botonEliminar);
}