const formularioRegistro = document.getElementById("registrar");

formularioRegistro.addEventListener("click", (event) => {
  event.preventDefault();

  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const cedula = document.getElementById("cedula").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  const correoElectronico = document.getElementById("correo-electronico").value;
  const numeroCelular = document.getElementById("numero-celular").value;

  const nombreRegistrado = document.getElementById("nombre-registrado");

  nombreRegistrado.textContent = nombres + " " + apellidos;

  const alertSuccess = document.querySelector(".alert-success");
  alertSuccess.hidden = false;
});
