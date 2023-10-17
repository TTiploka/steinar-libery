import books from "../assets/books.json"
export default function Book() {
    return <>
        <article className=" flex p-20 ">
                <img className="w-80 h-96 rounded-md" src={books[0].image} alt="src/assets/nofoto.png" />
                <section className=" w-full h-96 p-5 text-center  flex flex-col justify-center gap-2">
                    <h1 className="text-white text-2xl   ">{books[0].name}</h1>
                    <p className="text-white my-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                    lacus vel facilisis. </p>
                    <button className="bg-indigo-800 w-32 h-10 text-white rounded-md self-center ">Read</button>
                </section>
        </article>
    </>
}