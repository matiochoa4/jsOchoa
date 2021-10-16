const cards = document.getElementById("cards");
const items = document.getElementById("items");
const totales = document.getElementById("totales");
const templateCard = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const templateTotales = document.getElementById("template-totales").content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    if (localStorage.getItem("carritoCompra")) {
        carrito = JSON.parse(localStorage.getItem("carritoCompra"))
        printCarrito()
    } 
})

cards.addEventListener("click", e => {
    añadirCarrito(e);
})

items.addEventListener("click", e => {
    masMenos(e);
})

const fetchData = async () => {
    try {
        const res = await fetch("catalogo.json")
        const data = await res.json()
        printCards(data)
    } catch (error) {
        console.log(error)
    }
}

const printCards = data => {
    data.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.title; 
        templateCard.querySelector("p").textContent = producto.precio; 
        templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector(".btn-dark").dataset.id = producto.id; 
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const añadirCarrito = e => {
    if (e.target.classList.contains("btn-dark")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto }
    printCarrito();
}

const printCarrito = () => {
    items.innerHTML = ""
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id;
        templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio;
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment);
    printTotales();

    localStorage.setItem("carritoCompra", JSON.stringify(carrito))
}

const printTotales = () => {
    totales.innerHTML = "";
    if (Object.keys(carrito).lenght === 0) {
        totales.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return;
    }

    const totalCantidad = Object.values(carrito).reduce((acumulador, {cantidad}) => acumulador + cantidad ,0);
    const totalPrecio = Object.values(carrito).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio ,0);
    
    
    templateTotales.querySelectorAll("td")[0].textContent = totalCantidad;
    templateTotales.querySelector("span").textContent = totalPrecio;

    const clone = templateTotales.cloneNode(true);
    fragment.appendChild(clone)
    totales.appendChild(fragment)

    const vaciarCarrito = document.getElementById("vaciar-carrito")
    vaciarCarrito.addEventListener("click", () => {
        carrito = {}
        printCarrito()
    })
}

const masMenos = e => {
    if (e.target.classList.contains("btn-info")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        printCarrito()
    }
    if (e.target.classList.contains("btn-danger")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        printCarrito()
    }
    e.stopPropagation()
}

const comprar = document.getElementById("compra-realizada")
    comprar.addEventListener("click", () => {
        carrito = {}
        alert("La compra se ha realizado con éxito!")
        printCarrito()
    })


function guardar() {
    class informacionContacto {
        constructor (nombreForm, emailForm, textoForm) {
            this.nombreForm = nombreForm;
            this.emailForm = emailForm;
            this.textoForm = textoForm;
        }
    }

    let datoContacto = JSON.parse(localStorage.getItem("infoContacto"))
    if(!datoContacto) {
        contacto = [];
    }
    const getAll = () => {
        return datoContacto
    }
    const create = (usuario) => {
        datoContacto.push(usuario)
        localStorage.setItem("infoContacto", JSON.stringify(datoContacto))
    }
    let formNombre = document.getElementById("nombre");
    let formEmail = document.getElementById("email");
    let formTexto = document.getElementById("texto");

    document.addEventListener('submit', (event) => {
      
        event.preventDefault();
        const formularioNombre = formNombre.value;
        const formularioEmail = formEmail.value;
        const formularioTexto = formTexto.value;

    
        const usuario = new informacionContacto(formularioNombre, formularioEmail, formularioTexto)
        localStorage.setItem("infoContactos", JSON.stringify(usuario))
    }   
    )}
