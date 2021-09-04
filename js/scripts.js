        
// Desafio objetos y arrays + Preentrega

class datosPersonas {
  constructor (nombre, cantidad, provincia){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.provincia = provincia;
  }
}
        
let nombreIngresado = prompt("Ingrese su nombre:");
nombreIngresado = nombreIngresado.toUpperCase();
  alert("Bienvenido " + nombreIngresado + "!");


let preguntaCompra = prompt("Desea comprar?");
preguntaCompra = preguntaCompra.toUpperCase(); // no esta funcionando, por eso puse varios case "Si"
console.log(preguntaCompra);
  
switch (preguntaCompra) {
  case "SI":
    alert("Continuemos!");
    seguir();
      break;
  default:
    alert("Hasta luego, que tenga buen día!");
      break;
  }

function seguir (){
var direccion = prompt("Ingrese su provincia de residencia:");
direccion = direccion.toUpperCase();
  switch(direccion){
    case "BUENOS AIRES":
      alert(direccion + " se encuentra dentro del área de cobertura.");
      comprarCantidades();
      break;
    case "MENDOZA":
      alert(direccion + " se encuentra dentro del área de cobertura.");
      comprarCantidades();
      break;
    case "CORDOBA":
      alert(direccion + " se encuentra dentro del área de cobertura.");
      comprarCantidades();
      break;
    default:
      alert("Lo sentimos, " + direccion + " no se encuentra dentro del área de cobertura.");
      break;
    }
  }

function comprarCantidades() {
let precio = 60;
var productosCompra = parseInt(prompt("Cuantos MAJUMA! desea comprar?"));
let tipo = 30;
const arrayMayorista = [];
const arrayMinorista = [];
promos(precio, productosCompra, tipo);
  
function promos(precio, productosCompra, tipo) {
  if (productosCompra <= 10) {
    tipo = productosCompra * 1;
      arrayMinorista.push(nombreIngresado);
      precio = precio * productosCompra;
      precio = precio.toFixed(2);
        alert("El total a pagar es: $" + precio + ". No se aplican promociones al comprar menos de 10 unidades.");  
      } else if (productosCompra >= 10 && productosCompra <= 20) {
          tipo = productosCompra * 1;
            arrayMinorista.push(nombreIngresado);
            precio = precio * productosCompra * 0.95;
            precio = precio.toFixed(2);
            alert("El total a pagar es: $" + precio + ". Se aplica un 5% de descuento por cantidad.");  
      } else if (productosCompra >= 20 && productosCompra <= 29) {
          tipo = productosCompra * 1;
            arrayMinorista.push(nombreIngresado);
            precio = precio * productosCompra * 0.9;
            precio = precio.toFixed(2);
            alert( "El total a pagar es: $" + precio + ". Se aplica un 10% de descuento por cantidad.");  
      } else {
          arrayMayorista.push(nombreIngresado);
          precio = precio * productosCompra * 0.8;
          precio = precio.toFixed(2);
          alert("El total a pagar es: $" + precio + ". Se aplica un 20% de descuento por precio mayorista.");
        }
      }
   
if (productosCompra < 30) {
  console.log(nombreIngresado + " es cliente minorista.");  
  } else {
      console.log(nombreIngresado + " es cliente mayorista."); 
    }
  }
 
const arrayDatos = new datosPersonas (nombreIngresado, productosCompra, direccion);
const datosIngresados = [arrayDatos];
console.log (arrayDatos);



/* let preguntaCompra = prompt("Desea comprar?");
preguntaCompra = preguntaCompra.toUpperCase(); // no esta funcionando, por eso puse varios case "Si"

  switch (preguntaCompra){
    case "Si":
      alert("Continuemos!");
     // seguir ();
      break;
    case "SI":
      alert("Continuemos!");
      //seguir ();
      break;
    case "si":
      alert("Continuemos!");
     // seguir ();
      break;      
    default:
      alert("Hasta luego, que tenga buen día!");
      break;
  }

//function seguir (){
  let direccion = prompt("Ingrese su provincia de residencia:");
  direccion = direccion.toUpperCase();
  switch(direccion){
    case "BUENOS AIRES":
      alert(direccion + " se encuentra dentro del área de cobertura.");
      break;
    case "MENDOZA":
      alert(direccion + " se encuentra dentro del área de cobertura.");
      break;
    case "CORDOBA":
      alert(direccion + " se encuentra dentro del área de cobertura.");
      break;
    default:
      alert("Lo sentimos, " + direccion + " no se encuentra dentro del área de cobertura.");
      break;
    }
  //}

// el objetivo es que en caso de no querer comprar, se corte la cadena de ejecucion, mientras que si quiere comprar, continue la ejecucion

// (si yo pongo let direccion dentro de la funcion, abajo no me lo toma para la informacion del obj)

let precio = 60;
let productosCompra = parseInt(prompt("Cuantos MAJUMA! desea comprar?"));
let tipo = 30;
const arrayMayorista = [];
const arrayMinorista = [];
promos(precio, productosCompra, tipo);

function promos(precio, productosCompra, tipo){
  if(productosCompra <= 10){
    tipo = (tipo * 1);
    arrayMinorista.push(nombreIngresado);
    precio = precio * productosCompra;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". No se aplican promociones al comprar menos de 10 unidades.");
  }else if((productosCompra >= 10) && (productosCompra <= 20)){
    tipo = (tipo * 1);
    arrayMinorista.push(nombreIngresado);
    precio = (precio * productosCompra) * 0.95;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". Se aplica un 5% de descuento por cantidad.");
  }else if((productosCompra >= 20) && (productosCompra <= 29)){
    tipo = (tipo * 1);
    arrayMinorista.push(nombreIngresado);
    precio = (precio * productosCompra) * 0.90;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". Se aplica un 10% de descuento por cantidad.");
  }else {
    arrayMayorista.push(nombreIngresado);
    precio = (precio * productosCompra) * 0.80;
    precio = precio.toFixed(2);
    alert("El total a pagar es: $" + precio + ". Se aplica un 20% de descuento por precio mayorista.");
  }
}

// imprime cliente mayorista pero no cliente minorista (probe dandole valor string a la variable y pasa lo mismo)

if (tipo < 30){
  console.log(arrayMinorista + " es cliente minorista.");
}else {
  console.log(arrayMayorista + " es cliente mayorista.");  // cuando es mayorista imprime esta linea y cuando es minorista imprime esta linea tambien, pero sin el nombre
}

// el objetivo esta claro: si compra menos de x cantidad de unidades va a una lista de minoristas, si compra mas de x cantidad, va a la lista de mayoristas

const arrayDatos = new datosPersonas (nombreIngresado, productosCompra, direccion);
const datosIngresados = [arrayDatos];
console.log (arrayDatos);


 */
      