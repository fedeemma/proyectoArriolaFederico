/*function entradaCine(){
const valorEntrada = 2350
let importeIngresado = parseFloat(prompt("Ingrese el importe a abonar"))

if(isNaN(importeIngresado)){
    alert("importe incorrecto, vuelve a ingresar el importe")
return
}

while (importeIngresado < valorEntrada){
    const importeFaltante = valorEntrada - importeIngresado
    alert("importe insuficiente, le faltan $" + importeFaltante + " " +"para completar la transacción")
    importeIngresado = parseFloat(prompt("Ingrese un nuevo importe"))
}
const cambio = importeIngresado - valorEntrada
alert("Su compra ha sido aceptada con éxito, su cambio es $" + cambio)

}

entradaCine()

*/

const cartelera = function(pelicula, precio, sala, calidad){

    this.pelicula = pelicula
    this.precio = precio
    this.sala = sala
    this.calidad = calidad
}

let salaNueve = new cartelera ("Rápidos y Furiosos 10", 3500, 9, "D-BOX")
let  salaSiete = new cartelera ("Creed 3", 3100, 7, "D-BOX")
let salaCinco = new cartelera ("La Extorición", 2200, 5, "D-BOX")
let salaTres = new cartelera ("Super Marios Bross", 2600, "D-BOX")

let lista = [salaCinco, salaNueve, salaSiete, salaTres]

function seleccionarPelicula(){

    let peliculaSeleccionada = prompt("seleccione la película").trim().toUpperCase()

    let resultado = lista.filter((peliculas)=> peliculas.pelicula.toUpperCase().includes(peliculaSeleccionada))
    
    if (resultado.length > 0){

        console.table(resultado)
    } else{
        alert(`Por el momento la película ${peliculaSeleccionada} no se encuentra disponible`)
    
    }

}
