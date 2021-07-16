let productoElegido = prompt("Ingrese el número de producto que desea comprar (del 1 al 6)");

const suma = (a,b) => a + b;
const iva = x => x * 0.21;
const precioProducto = productoElegido * 100;

let precioFinal = suma(precioProducto, iva(precioProducto))

if(productoElegido > 6){
    alert("El número ingresado no es válido");
}else{
    switch(productoElegido){
        case "1":
            alert("El precio final de ese producto es " + precioFinal)
            break;
        case "2":
            alert("El precio final de ese producto es " + precioFinal)
            break;
        case "3":
            alert("El precio final de ese producto es " + precioFinal)
            break;
        case "4":
            alert("El precio final de ese producto es " + precioFinal)
            break;
        case "5":
            alert("El precio final de ese producto es " + precioFinal)
            break;
        case "6":
            alert("El precio final de ese producto es " + precioFinal)
            break;
    }
}