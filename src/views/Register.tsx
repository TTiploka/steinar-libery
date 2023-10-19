export default function Register() {
    return <>
    <article className="text-white text-left flex shadow-md shadow-stone-900  my-20 mx-auto w-4/5 sm:w-4/6 md:w-3/5 h-auto">
        <section className="bg-gray-900 rounded-l-md flex flex-col gap-5 md:w-1/2 w-full p-5 ">
            <h1 className="text-2xl text-center ">Register</h1>
            <div className="flex gap-3">
                <input className="rounded-sm text-md flex-initial w-1/2 p-2" type="text" placeholder="First Name" />
                <input className="rounded-sm text-md flex-initial w-1/2 p-2" type="text" placeholder="Last Name" />
            </div>
            <input className="rounded-sm text-md w-full p-2" type="text" placeholder="Email" />
            <input className="rounded-sm text-md w-full p-2" type="text" placeholder="Password" />
            <input className="rounded-sm text-md w-full p-2" type="text" placeholder="Repeat Password" />
            <button className="bg-indigo-500 rounded-md self-center hover:shadow-md hover:shadow-indigo-800 w-4/5 h-10">Submit</button>
            <small className="text-center text-md">Alrealy have an account? <em className="text-blue-600 hover:underline not-italic">Join Now</em></small>
        </section>
        <img className="w-1/2 h-auto rounded-r-md m-0 hidden md:block " src="src/assets/fondo.jpg" alt="src/assets/nofoto.png" />
    </article>
    </>
}