import { books } from "./books"
export default function Art(props:{num:number}) {
    return <>
        <article className='flex gap-2 text-gray-400 hover:text-blue-600 rounded bg-stone-800 shadow hover:shadow-md hover:shadow-blue-700'>
        <img className='w-20 h-28 object-cover m-2 border rounded' src={books[props.num].src} alt="" />
        <hgroup className='flex flex-col justify-center'>
          <h1>{books[props.num].name}</h1>
          <p className='text-lg'>{books[props.num].genere}</p>
        </hgroup>
        </article>
    </>
}