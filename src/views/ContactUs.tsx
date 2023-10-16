export default function ContactUs() {
    return <>
        <article className="text-white flex text-left my-20 p-2 mx-auto w-3/5 h-auto">
        <div className="border w-1/2 py-5 px-5 rounded-l-md bg-gray-900">
            <h1 className="text-white text-3xl  text-center">Login</h1>
            <small className="block mb-10 text-center text-gray-500">Type your data to login</small>
            <p className="text-sm">User</p>
            <input className="w-full h-10 rounded-sm text-xl mb-5" type="text" placeholder="Luca" />
            <p className="text-sm">Mail</p>
            <input className="w-full h-10 rounded-sm text-xl mb-5" type="text" placeholder="Password" />
            <p className="text-sm">Type your messaje</p>
            <input className="w-full h-28 rounded-sm text-xl p-0" type="text" placeholder="Password" />
            <button className="bg-indigo-500  w-1/2 h-10 my-5 rounded-md mx-20">Submit</button>
        </div>
            <img className="w-1/2 h-auto rounded-r-md m-0 " src="" alt="" />
    </article>
    </>
}