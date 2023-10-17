export default function ContactUs() {
    return <>
        <article className="text-white text-left flex gap-0 w-3/5 h-auto p-2 my-20 mx-auto  ">
            <div className="bg-gray-900 rounded-l-md flex flex-col  items-start w-1/2 py-5 px-5 m-0   ">
                <h1 className="text-white text-3xl text-center self-center">Contact us</h1>
                <small className="text-gray-400 text-center self-center mb-10">Tell us what do you think</small>
                <p className="text-lg">User</p>
                <input className="rounded-sm text-black text-xl w-full p-2 mb-5" type="text" name="user"  placeholder="Luca" />
                <p className="text-lg">Mail</p>
                <input className="rounded-sm text-black text-xl w-full p-2 mb-5" type="text" name="mail" placeholder="example@provider.com" />
                <p className="text-lg">Type your messaje</p>
                <textarea className="rounded-sm text-black text-xl w-full p-2" name="comentary" rows={4} cols={50} placeholder="Message" />
                <button className="bg-indigo-500 rounded-md self-center w-1/2 h-10 my-5">Submit</button>
            </div>
            <img className="rounded-r-md w-1/2 h-auto m-0" src="src/assets/fondo.jpg" alt="src/assets/nofoto.png" />
        </article>
    </>
}