const username = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

function redirigir() {
    window.location.href = "privacidad.html";
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        email: email.value,
        password: password.value
    }

    console.log(data)
})


function redireccionarPagina1() {
    window.location.href = 'home.php'; // Reemplaza 'pagina1.html' con la URL de tu primera página
  }

  function redireccionarPagina2() {
    window.location.href = 'index.html'; // Reemplaza 'pagina2.html' con la URL de tu segunda página
  }

