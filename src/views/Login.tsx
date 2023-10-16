export default function Login() {
    return <>
    <article className="text-white flex text-left my-20 p-2 mx-auto w-3/5 h-auto">
        <div className=" w-1/3 py-5 px-5 rounded-l-md bg-gray-900">
            <h1 className="text-white text-3xl  text-center">Login</h1>
            <small className="block mb-10 text-center text-gray-500">Type your data to login</small>
            <p className="text-sm">User Name</p>
            <input className="w-full p-2 rounded-sm h-10 text-xl mb-5" type="text" placeholder="Luca" />
            <p className="text-sm">Password</p>
            <input className="w-full p-2 rounded-sm h-10 text-xl" type="text" placeholder="Password" />
            <p className="text-sm text-right hover:underline text-blue-600">Forget Password?</p>
            <button className="bg-indigo-500  w-1/2 h-10 my-5 rounded-md mx-14">Submit</button>
        </div>
            <img className="w-2/3 h-auto rounded-r-md m-0 "  src="src/assets/fondo.jpg" alt="src/assets/nofoto.png" />
    </article>
    </>
}