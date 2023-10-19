import books from "../assets/books.json"
export default function Book() {
    return <>
        <article className="flex flex-col mb:flex p-5 sm:flex-row sm:p-20">
                <img className="rounded-md w-60 h-auto self-center m-0" src={books[0].image} alt="src/assets/nofoto.png" />
                <section className="text-center flex flex-col gap-2 justify-center w-full p-5 m-0">
                    <h1 className="text-white text-2xl">{books[0].name}</h1>
                    <p className="text-white my-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                    lacus vel facilisis. </p>
                    <button className="bg-indigo-800 rounded-md self-center text-white hover:shadow-md hover:shadow-indigo-900 w-32 h-10">Read</button>
                </section>
        </article>
    </>
}