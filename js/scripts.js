// desafio: simulador interactivo

//bienvenida
let nombreIngresado = prompt("Ingrese su nombre:");
  alert("Bienvenido " + nombreIngresado + "!");

//desafio 
let precio = 60;
let productosCompra = parseInt(prompt("Cuantos MAJUMA! desea comprar?"));
promos(precio, productosCompra);
let direccion = prompt("Ingrese su provincia de residencia:");
direccion = direccion.toUpperCase();
envios(direccion);

function promos(precio, productosCompra){
  if(productosCompra <= 6){
    precio = precio * productosCompra;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". No se aplican promociones al comprar 6 unidades.");
  }else if((productosCompra >= 6) && (productosCompra <= 20)){
    precio = (precio * productosCompra) * 0.90;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". Se aplica un 10% de descuento por cantidad.");
  }else if((productosCompra >= 20) && (productosCompra <= 30)){
    precio = (precio * productosCompra) * 0.80;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". Se aplica un 20% de descuento por cantidad.");
  }else {
    precio = (precio * productosCompra) * 0.70;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". Se aplica un 30% de descuento por cantidad.");
  }
}

function envios(direccion){
  switch(direccion){
    case "BUENOS AIRES":
      alert(direccion + " se encuentra dentro del área de cobertura. Procederemos al envio!");
      break;
    case "MENDOZA":
      alert(direccion + " se encuentra dentro del área de cobertura. Procederemos al envio!");
      break;
    case "CORDOBA":
      alert(direccion + " se encuentra dentro del área de cobertura. Procederemos al envio!");
      break;
    default:
      alert("Lo sentimos, " + direccion + " no se encuentra dentro del área de cobertura.");
  }
}


