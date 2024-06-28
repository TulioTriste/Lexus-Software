$(document).ready(function () {
  const nombre = $("#nombre-mis-datos");
  const apellido = $("#apellido-mis-datos");
  const telefono = $("#telefono-mis-datos");
  const email = $("#email-mis-datos");
  const direccion = $("#direccion-mis-datos");

  const btnGuardarMisDatos = $("#btn-guardar-mis-datos");

  btnGuardarMisDatos.on("click", async function (e) {
    const response = await fetch("/api/profile/mis-datos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        csrf_token: CSRF_TOKEN,
        nombre: nombre.val(),
        apellido: apellido.val(),
        telefono: telefono.val(),
        email: email.val(),
        direccion: direccion.val(),
      }),
    });

    const data = await response.json();

    if (data.emailExist) {
        showToast("Perfil", "El email ingresado ya se encuentra registrado.");
        return;
    }

    if (data.success) {
      showToast("Perfil", "Tus datos han sido actualizados correctamente.", true);
    } 
    else {
      showToast("Pefil", "Ha ocurrido un error al actualizar tus datos.");
    }

    setTimeout(function () {
      location.reload();
    }, 1000);
  });
});
