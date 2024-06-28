$(document).ready(function () {
  const validaciones = {
    email: false,
    password: false,
  };

  const email = $("#email-login");
  const emailFeedback = $("#email-login-feedback");
  const password = $("#password-login");
  const passwordFeedback = $("#password-login-feedback");

  const btnLogin = $("#btn-login");
  const btnTogglePassword = $("#btn-login-toggle-password");

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

  // Validar Email Login Modal //
  email.on("focusout", function () {
    let val = $(this).val();

    if (val === "") {
      email
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      emailFeedback
        .html("El correo no cumple el formato correcto")
        .addClass("d-block text-danger");
    }
  });

  email.on("keyup", function () {
    let val = $(this).val();
    let valido = validarEmail(val);

    validaciones.email = valido;
    validarLogin(validaciones);

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

  // Validar Password Login Modal //
  password.on("focusout", function () {
    let val = $(this).val();

    if (val === "") {
      password
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      passwordFeedback
        .html("La contraseña debe tener al menos 8 caracteres")
        .addClass("d-block text-danger");
    }
  });

  password.on("keyup", function () {
    let val = $(this).val();
    let valido = validarPassword(val);

    validaciones.password = valido;
    validarLogin(validaciones);

    if (valido) {
      password
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      passwordFeedback.removeClass("d-block text-danger").html("");
    } else {
      password
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      passwordFeedback
        .html("La contraseña debe tener al menos 8 caracteres")
        .addClass("d-block text-danger");
    }
  });

  // Botón Ingresar Login Modal //
  btnLogin.on("click", async function () {
    if (validarLogin(validaciones)) {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          csrf_token: CSRF_TOKEN,
          email: email.val(),
          password: password.val(),
        }),
      });

      const data = await response.json();

      if (!data.success) {
        showToastLogin("El email o la contraseña son incorrectos.");
        return;
      }

      showToastLogin("Inicio de sesión exitoso.", true);

      setTimeout(function () {
        location.reload();
      }, 1000);
    } 
    else {
      showToastLogin("Debes completar todos los campos para iniciar sesión.");
    }
  });
});

function validarLogin(validaciones) {
  return Object.values(validaciones).every((value) => value);
}
