export default function Register() {
    return <>
    <article className="text-white flex text-left my-20 p-2 mx-auto w-3/5 h-auto">
        <div className="w-1/3 py-5 px-5 rounded-l-md bg-gray-900">
            <h1 className="text-white text-2xl mb-3 text-center">Register</h1>
            <p className="text-sm">Name</p>
            <input className="w-full p-2 rounded-sm text-md mb-3" type="text" placeholder="Luis" />
            <p className="text-sm">Last Name</p>
            <input className="w-full p-2 rounded-sm text-md mb-3" type="text" placeholder="Carnel" />
            <p className="text-sm">User Name</p>
            <input className="w-full p-2 rounded-sm text-md mb-3" type="text" placeholder="Luca" />
            <p className="text-sm">Mail</p>
            <input className="w-full p-2 rounded-sm text-md mb-3" type="text" placeholder="Mail" />
            <p className="text-sm">Password</p>
            <input className="w-full p-2 rounded-sm text-md mb-3" type="text" placeholder="Password" />
            <p className="text-sm">Repeat Password</p>
            <input className="w-full p-2 rounded-sm text-md mb-3" type="text" placeholder="Password" />
            <button className="bg-indigo-500 w-1/2 h-10 my-5 rounded-md mx-14">Submit</button>
        </div>
            <img className="w-2/3 h-auto rounded-r-md m-0 " src="src/assets/fondo.jpg" alt="src/assets/nofoto.png" />
    </article>
    </>
}