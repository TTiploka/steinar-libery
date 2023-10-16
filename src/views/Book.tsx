import books from "../assets/books.json"
export default function Book() {
    return <>
        <article className="p-10 flex">
                <img className="w-80 h-96 m-20 ml-20 border rounded-md" src={books[0].image} alt="src/assets/nofoto.png" />
                <section className=" w-1/2 h-96 text-center border mt-20 p-0 ">
                    <h1 className="text-white text-2xl">{books[0].name}</h1>
                    <p className="text-white my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                    lacus vel facilisis. </p>
                    <button className="bg-indigo-800 w-32 h-10 my-auto text-white rounded-md ">Read</button>
                </section>
        </article>
    </>
}