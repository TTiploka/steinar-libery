// Importo las imagenes


import facebook from './assets/icon_f.png'
import twiter from './assets/icon_t.png'
import whatsapp from './assets/icon_w.png'

import Art from './Componentes/Art'

import books from './assets/books.json'

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
       <Art name={books[0].name} genere={books[0].genere} image={books[0].image}/>
       <Art name={books[1].name} genere={books[1].genere} image={books[1].image}/>
       <Art name={books[2].name} genere={books[2].genere} image={books[2].image}/>
       <Art name={books[3].name} genere={books[3].genere} image={books[3].image}/>
       <Art name={books[4].name} genere={books[4].genere} image={books[4].image}/>
       <Art name={books[5].name} genere={books[5].genere} image={books[5].image}/>
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
