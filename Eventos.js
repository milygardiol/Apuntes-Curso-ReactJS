/* Eventos del DOM


onClick={} <= función
eventListener=> patrón de diseño que sirve para escuchar cuando algo ocurre sobre un elemento, y ejecuta una función.

*/

window.addEventListener("resize", onResize);

// Remover eventos

return( ) => {
    console.log("On dismount")
    window.removeEventListener(onResize);
}

// ¿Por qué se remueven los eventos?
// Si dejamos los eventos sin des-registrar, podemos crear leaks(fugas) de memoria o registrar más de una vez un event.

// para registrar manualmente un evento en el DOM, se realiza dentro de un effect y se de-registra en una función de limpieza en el return del efecto.

// REACT Y LOS EVENTOS
// SYNTHETIC EVENTS

/* 
React se encarga de llevar al dom real, las diferencias que tiene con el virtual dom. (visto en la clase pasada)
React soluciona el tener en cuenta las diferencias entre navegadores al trabajar con ellos y sus distintas formas de comprender el código.

Los eventos sintéticos no tienen el problema de estara pentientes a la hora de desmontarlos, de por sí, trabajando con archivos .jsx, los synthetic events lo hacen por default.

=> tienen evt.nativeEvent; => para ver los eventos nativos

HANDLER(E) 

*/

export default function App() {
    function onClick (evt) {
        console.log("Clicked")
        // Cuando termina esta función el evento se destruye
    }
    return (
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

// Si se necesita el valor del evento lo puedo guardar en un estado

evt.preventDefault();
// Para sacar el comportamiento esperado del evento (cancelar)

evt.stopPropagation();
// Por defecto se propagan los eventos en su arbol (bubbling) 


// Desafío generico

const InputNoVowels = () => {

    const keyDownHandler = (event) => {
        const vowels = ["a", "e", "i", "o", "u"]


        console.log(event.key);
        if (vowels.includes(event.key.toLowerCase())) {
            event.preventDefault()
        }
    }

    return (
        <div>
            <input onKeyDown={keyDownHandler()} type="text"></input>
        </div>
    )
}
// export default InputNoVowels
