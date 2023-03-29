let token = localStorage.getItem("localToken");

let titulo = document.querySelector(".titulo-info");

let id = (getParameter = () => {
  address = window.location.search;
  parameterList = new URLSearchParams(address);
  return parameterList.get("id");
})();

titulo.innerHTML = "INTEGRANTES DEL GRUPO " + id;

let url = "https://bootcamp-adviters.herokuapp.com/grupos/" + id;
let options = { headers: { Authorization: `bearer ${token}` } };

let container = document.querySelector(".integrantes-container");

fetchData(url, "GET", options).then((data) => cargarIntegrantes(data));

function cargarIntegrantes(integrantes) {
  for (let integrante of integrantes) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    let tarjetaHtml = `
    <img src="../img/usuario.png" />
        <div class="info-text">
          <h3>${integrante.nombre} ${integrante.apellido}</h3>
          <ul>
            <li>id: ${integrante.id}</li>
            <li>Telefono: ${integrante.telefono}</li>
            <li>Mail: ${integrante.email}</li>
          </ul>
        </div>
    `;
    tarjeta.innerHTML = tarjetaHtml;
    container.appendChild(tarjeta);
  }
}
