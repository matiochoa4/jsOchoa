/* Segunda preentrega */


function agregar () {
  $("#aparecer")[0].style.display = 'block';
}
  function calcularPrecio () {
      const nombreIngresado = $("#nombre")[0];
      const apellidoIngresado = $("#apellido")[0];
      const cantidadIngresada = $("#cantidadProductos")[0];
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
      const nombreIngresado = $("#nombre")[0];
      const apellidoIngresado = $("#apellido")[0];
      const cantidadIngresada =  $("#cantidadProductos")[0];
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

      let formNombre = $("#nombre")[0];
      let formApellido = $("#apellido")[0];
      let formMail = $("#mail")[0];
      let formResidencia = $("#residencia")[0];
      let formCantidad = $("#cantidadProductos")[0];
      let formPrecio = $("#idPrecio")[0];
      
      $(document).ready(function(){
      $("#formulario").submit(function(event){
      
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
        
        // funciona bien si saco el la variable en la que se ingresa un número

        // esto cuando lo paso a jquery no me funciona, claramente hay algo que estoy haciendo mal
      
        let crearSelect = document.createElement("option");
        let textnode = document.createTextNode("El precio es de la compra de " + nombreCompleto + " es $" + precio);
        crearSelect.appendChild(textnode);
        document.getElementById("historial").appendChild(crearSelect);
        event.preventDefault();

      /*  */

       /* $("option"),{
         text: "El precio de la compra de " + nombreCompleto + " es de $" + precio
       }.append("#historial") */ 
       
       // esta es la ultima forma que probe
    })
  })
}