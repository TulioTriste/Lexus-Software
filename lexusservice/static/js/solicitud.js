$(document).ready(function () {
  const validaciones = {
    asunto: false,
    mensaje: false,
  };

  const servicioField = $("#servicio");
  const asuntoField = $("#asunto");
  const mensajeField = $("#mensaje");
  const submitButton = $("#submit-button");

  const asuntoFeedback = $("#asunto-feedback");
  const mensajeFeedback = $("#mensaje-feedback");

  // Validar el campo de asunto
  asuntoField.on("focusout", function () {
    let val = $(this).val();

    if (val === "") {
      asuntoField
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      asuntoFeedback
        .html("El campo de asunto no puede estar vacío")
        .addClass("d-block text-danger");
    }
  });

  asuntoField.on("keyup", function () {
    let val = $(this).val();
    let valido = validarVacio(val);

    validaciones.asunto = valido;
    validarSolicitud(validaciones, submitButton);

    if (valido) {
      asuntoField
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      asuntoFeedback.removeClass("d-block text-danger").html("");
    } else {
      asuntoField
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      asuntoFeedback
        .html("El campo de mensaje no puede estar vacío")
        .addClass("d-block text-danger");
    }
  });

  // Validar el campo de mensaje
  mensajeField.on("focusout", function () {
    let val = $(this).val();

    if (val === "") {
      mensajeField
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      mensajeFeedback
        .html("El campo de mensaje no puede estar vacío")
        .addClass("d-block text-danger");
    }
  });

  mensajeField.on("keyup", function () {
    let val = $(this).val();
    let valido = validarVacio(val);

    validaciones.mensaje = valido;
    validarSolicitud(validaciones, submitButton);

    if (valido) {
      mensajeField
        .removeClass("is-invalid text-danger")
        .addClass("is-valid text-success");
      mensajeFeedback.removeClass("d-block text-danger").html("");
    } else {
      mensajeField
        .removeClass("is-valid text-success")
        .addClass("is-invalid text-danger");
      mensajeFeedback
        .html("El campo de asunto no puede estar vacío")
        .addClass("d-block text-danger");
    }
  });

  // Validar el formulario
  submitButton.on("click", async function () {
    if (!validarSolicitud(validaciones, submitButton)) {
      showToast("Solicitud", "Por favor, rellene todos los campos");
    } else {
      const response = await fetch("/api/solicitud/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          csrf_token: CSRF_TOKEN,
          id_servicio: servicioField.val(),
          asunto: asuntoField.val(),
          mensaje: mensajeField.val(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        submitButton.attr("disabled", "disabled");
        showToast("Solicitud", "Solicitud enviada correctamente", true);

        setTimeout(function () {
          location.reload();
        }, 1000);
      } else {
        showToast("Solicitud", "Error al enviar la solicitud");
      }
    }
  });
});

function validarSolicitud(validaciones, button) {
  const validado = Object.values(validaciones).every((value) => value);

  if (validado) {
    button.removeAttr("disabled");
  } else {
    button.attr("disabled", "disabled");
  }

  return validado;
}
