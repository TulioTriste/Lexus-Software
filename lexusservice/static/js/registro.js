$(document).ready(function () {
  const validaciones = {
    rut: false,
    nombre: false,
    apellido: false,
    telefono: false,
    email: false,
    password: false,
    confirmPassword: false,
    check: false,
  };

  const rut = $("#rut");
  const rutfeedback = $("#rut-feedback");
  const nombre = $("#nombre");
  const nombreFeedback = $("#nombre-feedback");
  const apellido = $("#apellido");
  const apellidoFeedback = $("#apellido-feedback");
  const telefono = $("#telefono");
  const telefonoFeedback = $("#telefono-feedback");
  const email = $("#email");
  const emailFeedback = $("#email-feedback");
  const direccion = $("#direccion");
  const direccionFeedback = $("#direccion-feedback");
  const password = $("#password");
  const passwordFeedback = $("#password-feedback");
  const confirmPassword = $("#confirm-password");
  const confirmPasswordFeedback = $("#confirm-password-feedback");
  const check = $("#check");
  const btnRegistro = $("#btn-registro");
  const btnTogglePassword = $("#toggle-password");
  const btnToggleConfirmPassword = $("#toggle-confirm-password");

  // Toggle Password //
  btnTogglePassword.on("click", function () {
    const passwordType = password.attr("type");
    const icon = btnTogglePassword.find("i");

    if (passwordType === "password") {
      password.attr("type", "text");
      icon.removeClass("bi bi-eye").addClass("bi bi-eye-slash");
    } else {
      password.attr("type", "password");
      icon.removeClass("bi bi-eye-slash").addClass("bi bi-eye");
    }
  });

  // Toggle Confirm Password //
  btnToggleConfirmPassword.on("click", function () {
    const confirmPasswordType = confirmPassword.attr("type");
    const icon = btnToggleConfirmPassword.find("i");

    if (confirmPasswordType === "password") {
      confirmPassword.attr("type", "text");
      icon.removeClass("bi bi-eye").addClass("bi bi-eye-slash");
    } else {
      confirmPassword.attr("type", "password");
      icon.removeClass("bi bi-eye-slash").addClass("bi bi-eye");
    }
  });

  // Validar Rut //
  rut.on("focusout", function () {
    let rutval = $(this).val();

    if (rutval === "") {
      rut
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      rutfeedback
        .html("El formato del RUT debe ser: 12345678-K")
        .addClass("d-block text-danger");
    }
  });

  rut.on("keyup", function () {
    let rutval = $(this).val();
    let valido = validarRut(rutval);

    validaciones.rut = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      rut
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      rutfeedback.removeClass("d-block text-danger").html("");
    } else {
      rut
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      rutfeedback
        .html("El formato del RUT debe ser: 12345678-K")
        .addClass("d-block text-danger");
    }
  });

  // Validar Nombre //
  nombre.on("focusout", function () {
    let nombreVal = $(this).val();

    if (nombreVal === "") {
      nombre
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      nombreFeedback
        .html("Ingrese un nombre válido")
        .addClass("d-block text-danger");
    }
  });

  nombre.on("keyup", function () {
    let nombreVal = $(this).val();
    let valido = validarLargoVacio(nombreVal);

    validaciones.nombre = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      nombre
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      nombreFeedback.removeClass("d-block text-danger").html("");
    } else {
      nombre
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      nombreFeedback
        .html("Ingrese un nombre válido")
        .addClass("d-block text-danger");
    }
  });

  // Validar Apellido //
  apellido.on("focusout", function () {
    let apellidoVal = $(this).val();

    if (apellidoVal === "") {
      apellido
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      apellidoFeedback
        .html("Ingrese un apellido válido")
        .addClass("d-block text-danger");
    }
  });

  apellido.on("keyup", function () {
    let apellidoVal = $(this).val();
    let valido = validarLargoVacio(apellidoVal);

    validaciones.apellido = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      apellido
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      apellidoFeedback.removeClass("d-block text-danger").html("");
    } else {
      apellido
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      apellidoFeedback
        .html("Ingrese un apellido válido")
        .addClass("d-block text-danger");
    }
  });

  // Validar Telefono //
  telefono.on("focusout", function () {
    let telefonoVal = $(this).val();

    if (telefonoVal === "") {
      telefono
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      telefonoFeedback
        .html("El número debe ser de 9 digitos")
        .addClass("d-block text-danger");
    }
  });

  telefono.on("keyup", function () {
    let telefonoVal = $(this).val();
    let valido = validarTelefono(telefonoVal);

    validaciones.telefono = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      telefono
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      telefonoFeedback.removeClass("d-block text-danger").html("");
    } else {
      telefono
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      telefonoFeedback
        .html("El número debe ser de 9 digitos")
        .addClass("d-block text-danger");
    }
  });

  // Validar Correo //
  email.on("focusout", function () {
    let emailVal = $(this).val();

    if (emailVal === "") {
      email
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      emailFeedback
        .html("El correo no cumple el formato correcto")
        .addClass("d-block text-danger");
    }
  });

  email.on("keyup", function () {
    let emailVal = $(this).val();
    let valido = validarEmail(emailVal);

    validaciones.email = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      email
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      emailFeedback.removeClass("d-block text-danger").html("");
    } else {
      email
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      emailFeedback
        .html("El correo no cumple el formato correcto")
        .addClass("d-block text-danger");
    }
  });

  // Validar Direccion //
  direccion.on("focusout", function () {
    let val = $(this).val();

    if (val === "") {
      direccion
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      direccionFeedback
        .html("Dirección inválida")
        .addClass("d-block text-danger");
    }
  });

  direccion.on("keyup", function () {
    let val = $(this).val();
    let valido = validarVacio(val);

    validaciones.email = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      direccion
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      direccionFeedback.removeClass("d-block text-danger").html("");
    } else {
      direccion
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      direccionFeedback
        .html("Dirección inválida")
        .addClass("d-block text-danger");
    }
  });

  // Validar Contraseña //
  password.on("focusout", function () {
    let passwordVal = $(this).val();

    if (passwordVal === "") {
      password
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      passwordFeedback
        .html("La contraseña debe tener al menos 8 caracteres")
        .addClass("d-block text-danger");
    }
  });

  password.on("keyup", function () {
    let passwordVal = $(this).val();
    let valido = validarPassword(passwordVal);
    let validoConfirmPassword = validarConfirmarPassword(
      passwordVal,
      confirmPassword.val()
    );

    validaciones.password = valido;
    validarRegistro(validaciones, btnRegistro);

    if (validoConfirmPassword) {
      confirmPassword
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      confirmPasswordFeedback
      .removeClass("d-block text-danger")
      .html("");
    } else {
      confirmPassword
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      confirmPasswordFeedback
        .html("La contraseña no coincide con la anterior")
        .addClass("d-block text-danger");
    }

    if (valido) {
      password
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      passwordFeedback
      .removeClass("d-block text-danger")
      .html("");
    } else {
      password
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      passwordFeedback
        .html("La contraseña debe tener al menos 8 caracteres")
        .addClass("d-block text-danger");
    }
  });

  // Validar Confirmar Contraseña //
  confirmPassword.on("focusout", function () {
    let confirmPasswordVal = $(this).val();

    if (confirmPasswordVal === "") {
      confirmPassword
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      confirmPasswordFeedback
        .html("La contraseña no coincide con la anterior")
        .addClass("d-block text-danger");
    }
  });

  confirmPassword.on("keyup", function () {
    let confirmPasswordVal = $(this).val();
    let valido = validarConfirmarPassword(password.val(), confirmPasswordVal);

    validaciones.confirmPassword = valido;
    validarRegistro(validaciones, btnRegistro);

    if (valido) {
      confirmPassword
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      confirmPasswordFeedback.removeClass("d-block text-danger").html("");
    } else {
      confirmPassword
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      confirmPasswordFeedback
        .html("La contraseña no coincide con la anterior")
        .addClass("d-block text-danger");
    }
  });

  // Validar CheckBox //
  check.on("click", function () {
    let checkbox = $(this);
    validaciones.check = checkbox.is(":checked");
    validarRegistro(validaciones, btnRegistro);
  });

  // Register Button
  btnRegistro.on("click", async function () {
    if (!validarRegistro(validaciones, btnRegistro)) {
      showToastRegister("Antes de registrarse, complete todos los campos.");
    } else {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          csrf_token: CSRF_TOKEN,
          rut: rut.val(),
          nombre: nombre.val(),
          apellido: apellido.val(),
          telefono: telefono.val(),
          email: email.val(),
          direccion: direccion.val(),
          password: password.val(),
          rol: "Cliente",
        }),
      });

      const data = await response.json();

      if (data.userExist) {
        showToastRegister("El rut ya se encuentra registrado.");
        return;
      }

      if (data.emailExist) {
        showToastRegister("El correo ya se encuentra registrado.");
        return;
      }

      if (data.success) {
        showToastRegister("Registro exitoso.", true);
        btnRegistro.attr("disabled", "disabled");

        setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      }
    }
  });
});

function validarRegistro(validaciones, btn) {
  const validado = Object.values(validaciones).every((value) => value);

  if (validado) {
    btn.removeAttr("disabled");
  } else {
    btn.attr("disabled", "disabled");
  }

  return validado;
}
