// Importo las imagenes


import facebook from './assets/icon_f.png'
import twiter from './assets/icon_t.png'
import whatsapp from './assets/icon_w.png'

import Art from './Componentes/art'

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
       <Art num={0}></Art>
       <Art num={1}></Art>
       <Art num={2}></Art>
       <Art num={3}></Art>
       <Art num={4}></Art>
       <Art num={5}></Art>
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
