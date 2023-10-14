import facebook from '../assets/icon_f.png'
import twiter from '../assets/icon_t.png'
import whatsapp from '../assets/icon_w.png'

import Art from '../components/Art'

import books from '../assets/books.json'

export default function HomeView() {
    return (<>
        <section className='text-white py-10 flex flex-col items-center'>
            <h1 className="text-6xl font-bold underline">WELCOME!</h1>
            <input className='text-3xl w-80 px-4 h-14 m-8 border rounded-md bg-stone-900' type="text" placeholder='Busca un libro' />
        </section>

        <section className='grid md:grid-cols-3 gap-4 text-xl md:text-2xl container mx-auto'>
            {books.map((item) => <Art name={item.name} genere={item.genere} image={item.image} />)}
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