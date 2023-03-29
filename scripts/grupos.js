// sign out
let signOut = document.querySelector(".btn-sign-out");

function cerrarSesion() {
  localStorage.removeItem("localToken");
  console.log("hola");
  window.open("../index.html", "_self");
}

signOut.addEventListener("click", () => cerrarSesion());

// fin sign out

let url = "https://bootcamp-adviters.herokuapp.com/grupos";
let token = localStorage.getItem("localToken");

let options = { headers: { Authorization: `bearer ${token}` } };

let container = document.querySelector(".card-container");

fetchData(url, "GET", options).then((data) => cargarTarjetas(data));

function cargarTarjetas(grupos) {
  console.log(grupos);
  for (let grupo of grupos) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    let tarjetaHtml = `
            
                    <h2 class="grupo-titulo">${grupo.descripcion}</h2>
                    <button class="btn" type="submit" onclick="getGroupDetails(${grupo.id})">Mostrar más</button>
            
                    `;
    tarjeta.innerHTML = tarjetaHtml;
    container.appendChild(tarjeta);
  }
}

cargarTarjetas();

function getGroupDetails(id) {
  window.open(`info.html?id=${id}`, "_blank");
}
