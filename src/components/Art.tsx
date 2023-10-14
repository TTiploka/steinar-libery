// esto esta mal porque los tsx y jsx no son para poner funciones
// ni para poner datos, son explicitamente para poner codigo de react
// si no vas a crear codigo de rect usa solamente ts o js

// ahora bien esto tampoco se importaria desde un js ni un ts ya que son solo datos
// que posiblemente luego se cambien por bases de datos por lo tanto deveriamos crearlos
// en un json de la siguiente forma (POSTDATA: Antes de hacer algo mas moveremos los 
// archivos para la carpeta public porque ya no las usaremos con sus direciones relativas,
// que las llamaremos desde la web como url)

// Otra cosa que esta mal es que los componente no pueden acceder directamente a los datos, 
// pues tienes que setearlos desde fuera por eso cambie las props
// src lo cambie por image podria ser por cover o por tumbnails que son dos definiciones 
// que aun no te eh explicado por eso dejemoslo como imagen, no lo dejamos com src, porque 
// nos estamos refiriendo a la imagen del componente y estos tienen que ser reutilizables 
// y src dignifica source, y si tu lo entenderas, pero imagina que alguien que mira tu codigo
// no va al componente solo lo va a utilizar

// import { books } from "./books"

// Una recomendacion es cambiarle el nombre al componente porque primero
// esto no es un articulo, es un libro, necesitas nombrarlo con un nombre
// mas consistente, (Btn siempre se usa como Button, para no entrar en conflicto 
// con la etiqueta button de html)

// otra cosa este elemento <></> solo se usa cuando tu componente no tiene estructura 
// de bloque, ejemplo cuando tu componente solo usa dos etiquetas separadas
// <h1>Title</h1>
// <p>descripcion</p>
// q ue oasa con esto, que esto tiene que estar dentro de <></> porque son dos bloques 
// en vez de uno pero en tu caso estas enviando un solo bloque el article, por eso podemos omitirlo
export default function Art(props: { name: string, genere: string, image: string }) {
  return <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
    <img className='w-20 h-28 object-cover m-2 border rounded' src={props.image} alt="" />
    <hgroup className='flex flex-col justify-center'>
      <h1>{props.name}</h1>
      <p className='text-lg'>{props.genere}</p>
    </hgroup>
  </article>
}