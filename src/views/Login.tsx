export default function Login() {
    return <>
    <article className="text-white flex text-left shadow-md shadow-stone-900 w-4/5 sm:w-3/5 h-auto my-20 mx-auto">
        <div className="bg-stone-900 rounded-l-md flex flex-col gap-3 w-full md:w-1/2 py-5 px-5">
            <h1 className="text-white text-center text-3xl mb-5">Login</h1>
            <input className="rounded-md text-black text-xl w-full p-2 mb-5" type="text" placeholder="Email" />
            <input className="rounded-md text-black text-xl w-full p-2 " type="password" placeholder="Password" />
            <button className="bg-indigo-500 rounded-md self-center w-1/2 h-10 my-5 hover:shadow-md hover:shadow-indigo-800">Submit</button>
            <div className="flex justify-between gap-5">
                <span className="text-blue-600 text-sm sm:text-md -mt-3 hover:underline text-left ">Create Account</span>
                <span className="text-blue-600 text-sm sm:text-md -mt-3 hover:underline text-right">Forget Password?</span>
            </div>
        </div>
            <img className="rounded-r-md w-1/2 h-auto hidden md:block m-0 "  src="src/assets/fondo.jpg" alt="src/assets/nofoto.png" />
    </article>
    </>
}