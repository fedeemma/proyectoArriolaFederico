let pelicula = prompt(`
1: Rápidos y Furiosos 10
2: Creed 3
3: La Extorción
4: Super Marios Bross
`)

switch (pelicula){

    case "1":
        console.log("Rápidos y Furiosos 10") 
        break;
    case "2":
        console.log("Creed 3")
        break;
    case "3":
        console.log("La Extorción")
        break;
    case "4":
        console.log("Super Mario Bross")
        break;
    default:
        console.log("La película seleccionada no está disponible")
        break;
}

function solicitarNombre(){

    let nombre= prompt("ingrese su nombre")
    console.log(`${nombre} su película ha sido seleccionada con éxito`)

}
solicitarNombre() 