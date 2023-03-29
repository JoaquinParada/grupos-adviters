let url = "https://bootcamp-adviters.herokuapp.com/login";

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("idEmail").value;
  let password = document.getElementById("idPassword").value;

  let options = {
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  // Realiza la autenticación aquí, por ejemplo, verificando que las credenciales sean correctas.
  fetchData(url, "POST", options)
    .then((data) => {
      let token = data.accessToken.stsTokenManager.accessToken;
      localStorage.setItem("localToken", token);
      window.open("views/grupos.html", "_self");
    })
    .catch((err) => {
      activarModal("Haz puesto un mail o clave no valida");
    });
});
