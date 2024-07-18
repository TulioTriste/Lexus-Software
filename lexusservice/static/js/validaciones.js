function validarVacio(input) {
  return input.length !== "";
}

function validarLargoVacio(input) {
  return input.length <= 50 && input.length !== "";
}

function validarTelefono(telefono) {
  return telefono.length === 9;
}

function validarEmail(email) {
  let partes = email.split("@");
  if (partes.length !== 2) return false;

  let usuario = partes[0];
  const usuarioRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+/;
  if (!usuarioRegex.test(usuario)) return false;

  let dominioSplit = partes[1].split(".");

  let dominio = dominioSplit[0];
  let dominioEnd = dominioSplit[1];

  return dominioEnd != null && dominio.length !== 0 && dominioEnd.length !== 0;
}

function validarRut(rutCompleto) {
  let rut = rutCompleto.split("-")[0];
  let dv = rutCompleto.split("-")[1];
  let rutString = String(rut);
  let suma = 0;
  let multiplo = 2;
  let dvCalculado = 0;

  for (let i = rutString.length - 1; i >= 0; i--) {
    suma += parseInt(rutString[i]) * multiplo;
    multiplo++;
    if (multiplo > 7) {
      multiplo = 2;
    }
  }

  dvCalculado = 11 - (suma % 11);

  if (dvCalculado == 11) {
    dvCalculado = 0;
  } else if (dvCalculado == 10) {
    dvCalculado = "K";
  }
  return dv == dvCalculado;
}

function validarPassword(password) {
  return password.length >= 8;
}

function validarConfirmarPassword(password, confirmPassword) {
  return confirmPassword !== "" && password === confirmPassword;
}
