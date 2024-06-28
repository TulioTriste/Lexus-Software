$(document).ready(function () {
  const navItemSolicitud = $("#nav-item-solicitud");

  navItemSolicitud.on("click", function (e) {
    e.preventDefault();

    fetch("api/authenticated")
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated) {
          showToastLogin("Debes iniciar sesión para solicitar un servicio.");

          setTimeout(function () {
            $("#modal-login").modal("show");
          }, 1000);
        }
        else {
          location.href = "/pages/solicitud.html";
        }
      });
  });
});
