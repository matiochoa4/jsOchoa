/* entrega dom */

function calcularPrecio () {
    const nombreIngresado = document.getElementById("nombre");
    const apellidoIngresado = document.getElementById("apellido");
    const cantidadIngresada = document.getElementById ("cantidadProductos");
    const nombreId = nombreIngresado.value;
    const apellidoId = apellidoIngresado.value;
    const cantidadId = cantidadIngresada.value;
    var nombreCompleto = nombreId + " " + apellidoId;
    let precio = 60;
    let mayorista = 30; // cantidad de prodcutos para que sea compra mayorista
    const arrayMayorista = [];
    const arrayMinorista = [];
    if (cantidadId <= 10) {
        mayorista = cantidadId * 1;
            arrayMinorista.push(nombreCompleto);
            precio = cantidadId * precio;
            precio = precio.toFixed(2);
            alert("El total a pagar es: $" + precio + ". No se aplican promociones al comprar menos de 10 unidades."); 
    }   else if (cantidadId >= 10 && cantidadId <= 20) {
        mayorista = cantidadId * 1;
          arrayMinorista.push(nombreCompleto);
          precio = precio * cantidadId * 0.95;
          precio = precio.toFixed(2);
          alert("El total a pagar es: $" + precio + ". Se aplica un 5% de descuento por cantidad.");  
    } else if (cantidadId >= 20 && cantidadId <= 29) {
        mayorista = cantidadId * 1;
          arrayMinorista.push(nombreCompleto);
          precio = precio * cantidadId * 0.9;
          precio = precio.toFixed(2);
          alert( "El total a pagar es: $" + precio + ". Se aplica un 10% de descuento por cantidad.");  
    } else {
        arrayMayorista.push(nombreCompleto);
        precio = precio * cantidadId * 0.8;
        precio = precio.toFixed(2);
        alert("El total a pagar es: $" + precio + ". Se aplica un 20% de descuento por precio mayorista.");
      }

      if (cantidadId < 30) {
        console.log(nombreCompleto + " es cliente minorista.");  
        } else {
            console.log(nombreCompleto + " es cliente mayorista."); 
          }
          event.preventDefault();

    document.getElementById("idPrecio").value = "$" + precio;

  }
  
function comprarHistorial (){
    const nombreIngresado = document.getElementById("nombre");
    const apellidoIngresado = document.getElementById("apellido");
    const cantidadIngresada = document.getElementById ("cantidadProductos");
    const nombreId = nombreIngresado.value;
    const apellidoId = apellidoIngresado.value;
    const cantidadId = cantidadIngresada.value;
    var nombreCompleto = nombreId + " " + apellidoId;
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

  var node = document.createElement("OPTION");
  var textnode = document.createTextNode("El precio es de la compra de " + nombreCompleto + " es $" + precio);
  node.appendChild(textnode);
  document.getElementById("historial").appendChild(node);
  event.preventDefault();
}
