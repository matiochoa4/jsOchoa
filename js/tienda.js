/* Segunda preentrega */


function agregar () {
  document.getElementById("aparecer").style.display = 'block';
}
  function calcularPrecio () {
      const nombreIngresado = document.getElementById("nombre");
      const apellidoIngresado = document.getElementById("apellido");
      const cantidadIngresada = document.getElementById("cantidadProductos");
      const nombreId = nombreIngresado.value;
      const apellidoId = apellidoIngresado.value;
      const cantidadId = cantidadIngresada.value;
      let nombreCompleto = nombreId + " " + apellidoId;
      let precio = 60;
      let mayorista = 30; // cantidad de prodcutos para que sea compra mayorista
      const arrayMayorista = [];
      const arrayMinorista = [];
      if (cantidadId <= 10) {
          mayorista = cantidadId * 1;
              arrayMinorista.push(nombreCompleto);
              precio = cantidadId * precio;
              precio = precio.toFixed(2);
            // alert("El total a pagar es: $" + precio + ". No se aplican promociones al comprar menos de 10 unidades."); 
      }   else if (cantidadId >= 10 && cantidadId <= 20) {
          mayorista = cantidadId * 1;
            arrayMinorista.push(nombreCompleto);
            precio = precio * cantidadId * 0.95;
            precio = precio.toFixed(2);
          // alert("El total a pagar es: $" + precio + ". Se aplica un 5% de descuento por cantidad.");  
      } else if (cantidadId >= 20 && cantidadId <= 29) {
          mayorista = cantidadId * 1;
            arrayMinorista.push(nombreCompleto);
            precio = precio * cantidadId * 0.9;
            precio = precio.toFixed(2);
          // alert( "El total a pagar es: $" + precio + ". Se aplica un 10% de descuento por cantidad.");  
      } else {
          arrayMayorista.push(nombreCompleto);
          precio = precio * cantidadId * 0.8;
          precio = precio.toFixed(2);
          //alert("El total a pagar es: $" + precio + ". Se aplica un 20% de descuento por precio mayorista.");
        }

        // los alert estan comentados por ahora para no olvidarme la regla que use en ellos

        if (cantidadId < 30) {
          console.log(nombreCompleto + " es cliente minorista.");  
          } else {
              console.log(nombreCompleto + " es cliente mayorista."); 
            }
            event.preventDefault();

      $("#idPrecio")[0].value = "$" + precio;
    }
    
  function comprarHistorial (){
      const nombreIngresado = document.getElementById("nombre");
      const apellidoIngresado = document.getElementById("apellido");
      const cantidadIngresada =  document.getElementById("cantidadProductos");
      const nombreId = nombreIngresado.value;
      const apellidoId = apellidoIngresado.value;
      const cantidadId = cantidadIngresada.value;
      let nombreCompleto = nombreId + " " + apellidoId;
      let precio = 60;
      let mayorista = 30; // cantidad de prodcutos para que sea compra mayorista
      if (cantidadId <= 10) {
          mayorista = cantidadId * 1;
              precio = cantidadId * precio;
              precio = precio.toFixed(2);
      }   else if (cantidadId >= 10 && cantidadId <= 20) {
          mayorista = cantidadId * 1;
            precio = precio * cantidadId * 0.95;
            precio = precio.toFixed(2);
      } else if (cantidadId >= 20 && cantidadId <= 29) {
          mayorista = cantidadId * 1;
            precio = precio * cantidadId * 0.9;
            precio = precio.toFixed(2);
      } else {
          precio = precio * cantidadId * 0.8;
          precio = precio.toFixed(2);
        }

      class compraRealizada {
        constructor(nombreForm, apellidoForm, mailForm, residenciaForm, cantidadForm, precioForm) {
          this.nombreForm = nombreForm;
          this.apellidoForm = apellidoForm;
          this.mailForm = mailForm;
          this.residenciaForm = residenciaForm;
          this.cantidadForm = cantidadForm;
          this.precioForm = precioForm;
        }
      }

      let usuariosCompra = JSON.parse(localStorage.getItem('usuariosCompra'))
      if (!usuariosCompra) {
          usuariosCompra = [];
      }
    
      const getAll = () => {
          return usuariosCompra
      }
      const create = (usuario) => {
          usuariosCompra.push(usuario)
          localStorage.setItem('usuariosCompra', JSON.stringify(usuariosCompra))
      }

      let formNombre = document.getElementById("nombre");
      let formApellido = document.getElementById("apellido");
      let formMail = document.getElementById("mail");
      let formResidencia = document.getElementById("residencia");
      let formCantidad = document.getElementById("cantidadProductos");
      let formPrecio = document.getElementById("idPrecio");
      

        formulario.addEventListener('submit', (event) => {
      
        event.preventDefault();
        const formularioNombre = formNombre.value;
        const formularioApellido = formApellido.value;
        const formularioMail = formMail.value;
        const formularioResidencia = formResidencia.value;
        const formularioCantidad = formCantidad.value;
        const formularioPrecio = formPrecio.value;

    
        const usuario = new compraRealizada(formularioNombre, formularioApellido, formularioMail, formularioResidencia, formularioCantidad, formularioPrecio)
        console.log(usuario);
        create(usuario);
      
        let crearSelect = document.createElement("option");
        let textnode = document.createTextNode("El precio es de la compra de " + nombreCompleto + " es $" + precio);
        crearSelect.appendChild(textnode);
        document.getElementById("historial").appendChild(crearSelect);
        event.preventDefault();      
    })


    /* const URLJSON = '../data/catalogo.json';
    $("#compra1").click(() => {
        $.getJSON(URLJSON, function(estado, respuesta){
            if(estado === "success"){
                let alcohol = respuesta;         
                let producto1 = "JAGGER";
                for (const dato of alcohol) {
                    const productoencontrado = alcohol.find((dato) => dato.PRODUCTO === producto1);
                    if (productoencontrado != undefined) {
                        alert(productoencontrado);
                    }else {
                        console.log("Este producto no se encuentra en la tienda");
                    }
                }
            }
        }
        )
    }
    ) */

  }


 
  // esto es un detalle para cuando la parte de productos quede funcional

/*   function agregado() {
    $("#compra").html("Se Añadio al Carrito");
  }
  function agregado1() {
    $("#compra1").html("Se Añadio al Carrito");
  }
  function agregado2() {
    $("#compra2").html("Se Añadio al Carrito");
  }
  function agregado3() {
    $("#compra3").html("Se Añadio al Carrito");
  }
  function agregado4() {
    $("#compra4").html("Se Añadio al Carrito");
  }
  function agregado5() {
    $("#compra5").html("Se Añadio al Carrito");
  } */



