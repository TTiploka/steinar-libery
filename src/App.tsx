// Importo las imagenes
import book1 from './assets/Alice in Wonderland.jpg'
import book2 from './assets/Le petit prince.jpg'
import book3 from './assets/El tonto de chipre.jpg'
import book4 from './assets/Habitos atonicos.jpg'
import book5 from './assets/Psicologia del exito.jpg'
import book6 from './assets/Donde no hay.jpg'

import facebook from './assets/icon_f.png'
import twiter from './assets/icon_t.png'
import whatsapp from './assets/icon_w.png'

// Errores
// 1 - Le faltaba estructura al html
// 2 - Los titulos van dentro de headers ejemplo h1
// 3 - no limpiaste los estilos

export default function App() {
  return (<>
    <section className='text-white py-10 flex flex-col items-center'>
      <h1 className="text-6xl font-bold underline">WELCOME!</h1>
      <input className='text-3xl w-80 px-4 h-14 m-8 border rounded-md bg-stone-900' type="text" placeholder='Busca un libro' />
    </section>

    {/*container es una clase para contener los elementos segun la escala 
    de la pantalla y que estos no se modifiquen y mx-auto es para que 
    siempre tengan el mismo margen de los lados*/}
    <section className='grid md:grid-cols-3 gap-4 text-xl md:text-2xl container mx-auto'>
      <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={book1} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>Alice in Wonderland</h1>
          <p className='text-lg'>Aventura y fantasia</p>
        </hgroup>
      </article>

      <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={book2} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>Le pit prince</h1>
          <p className='text-lg'>Drama infantil</p>
        </hgroup>
      </article>

      <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={book3} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>El tonto de chipre</h1>
          <p className='text-lg'>Cuento infantil</p>
        </hgroup>
      </article>

      <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={book4} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>Habitos Atomicos</h1>
          <p className='text-lg'>Superacion personal</p>
        </hgroup>
      </article>

      <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={book5} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>Psicologia del exito</h1>
          <p className='text-lg'>Superacion Personal</p>
        </hgroup>
      </article>

      <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={book6} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>Donde no hay doctor</h1>
          <p className='text-lg'>Medicina casera</p>
        </hgroup>
      </article>
    </section>

    <footer className='w-full border-sky-500 border-t-2 p-2 flex text-small italic text-gray-600 justify-center mt-20'>
      <h3>Contactenos</h3>
      <img className='w-6 h-6 rounded-lg ml-10' src={facebook}></img>
      <img className='w-6 h-6 rounded-lg ml-3' src={twiter}></img>
      <img className='w-6 h-6 rounded-lg ml-3' src={whatsapp}></img>
    </footer>
  </>
  )
}
