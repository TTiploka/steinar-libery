import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (<>
  
  <h1 className="text-6xl font-bold underline">
    WELCOME!
  </h1>
  <input className='text-3xl h-14 m-8 rounded-md' type="text" placeholder='Busca un libro' />
  <div className='md:grid md:grid-cols-2 text-xl md:text-2xl m-5'>
  <div className='flex m-3 text-gray-400 hover:text-blue-600 '><img className='w-14 h-14 hover:shadow-md hover:shadow-emerald-900 rounded-md  ' src="src/src/Alice in Wonderland.jpg" alt="" /><p className='ml-2'>Alice in Wonderland <br /><span className='text-lg flex'>Aventura y fantasia</span></p></div>
  <div className='flex m-3 text-gray-400 hover:text-blue-600'><img className='w-14 h-14 hover:shadow-md hover:shadow-emerald-900 rounded-md  ' src="src/src/Le petit prince.jpg" alt="" /><p className='ml-2'>Le pit prince <br /><span className='text-lg flex'>Drama infantil</span></p></div>
  <div className='flex m-3 text-gray-400 hover:text-blue-600'><img className='w-14 h-14 hover:shadow-md hover:shadow-emerald-900 rounded-md  ' src="src/src/El tonto de chipre.jpg" alt="" /><p className='ml-2'>El tonto de chipre <br /><span className='text-lg flex'>Cuento infantil</span></p></div>
  <div className='flex m-3 text-gray-400 hover:text-blue-600'><img className='w-14 h-14 hover:shadow-md hover:shadow-emerald-900 rounded-md  ' src="src/src/Habitos atonicos.jpg" alt="" /> <p className='ml-2'>Habitos Atomicos <br /><span className='text-lg flex'>Superacion personal</span></p></div>
  <div className='flex m-3 text-gray-400 hover:text-blue-600'><img className='w-14 h-14 hover:shadow-md hover:shadow-emerald-900 rounded-md  ' src="src/src/Psicologia del exito.jpg" alt="" /><p className='ml-2'>Psicologia del exito <br /><span className='text-lg flex'>Superacion Personal</span></p></div>
  <div className='flex m-3 text-gray-400 hover:text-blue-600'><img className='w-14 h-14 hover:shadow-md hover:shadow-emerald-900 rounded-md  ' src="src/src/Donde no hay.jpg" alt="" /><p className='ml-2'>Donde no hay doctor <br /><span className='text-lg flex'>Medicina casera</span></p></div>
  </div>
  </>
  )
}
