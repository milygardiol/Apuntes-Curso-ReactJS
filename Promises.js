// # Promises

// Ciclo de vida: Serie de estados por los que pasa todo componente a lo largo de su ciclo de vida ?

// Promise => objeto que permite representar y seguir con el ciclo de vida de una función.

// Estados de la promesa => pendiente => completada || rechazada
// - Método Feynman

// Síncrono => desde el cliente se toma petición al servidor, cuando se tiene la respuesta todo sigue
// Asíncrono => la peticion sigue adelante, cuando tiene una respuesta, la misma se integra y no paran las demás cosas. Se quedan trabajando en el back hasta que luego de un rato vuelve a ejecutarse sin modificar todo lo demás

// Se implementa: 
// 1- .then para ver las peticiones

// Callstack => primero ejecuta las tareas síncronas, para luego tomar asincronas (repasar) Javascript ejecuta los tipo de peticiones

// La promise están separadas, se insertan luego de las ejecuciones pendientes sincronas y asincronas de javascript

// Promise in mounting
useEffect(() => {
  console.log("promesa en mounting")
//   El primero es para cuando se resuelva, el segundo cuando se rechace
    const getProducts = new Promise((resolve, reject) => {
        resolve(["mouse", "teclado", "cpu"])

    })

    getProducts()
    .then((data) => {  console.log(data); })
    .catch((err) => { console.log( err); })
    .finally(() => { console.lg ("finally siempre sucede"); })

  return () => {
    second
  }
}, [third])

// Promise para manejar números y condiciones
useEffect(( ) => {
    const getNumber = new Promise ((resolve, reject) => {
        const rand = Math.random()
        console.log(rand);

        if (rand > 0.5) {
            resolve ( ["mouse", "teclado", "cpu"]) 
        } else {
            reject ( "promesa rechazada")
        }
    })
})


// Método map
// De un array se puede generar otro array
// Método que sirve para tomar un nuevo array, en base a otro y utilzando una funcón transformadora.

productos.map ( p => p.toLoverCase())
productos.map ( p => p.toUpperCase())
productos.map ( p=> p+"-algo")
productos.map ( p => "<li>"+p+"</li>")


