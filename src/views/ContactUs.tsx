export default function ContactUs() {
    return <>
        <article className="border text-white text-left flex gap-0 4/5 sm:w-3/5 h-auto p-2 my-20 mx-auto">
            <div className="bg-gray-900 rounded-l-md flex flex-col gap-5 marker:items-start w-auto m-10 sm:4/6 md:w-4/5 md:m-auto lg:w-1/2 py-5 px-5">
                <h1    className="text-white    text-center self-center text-3xl">Contact us</h1>
                <small className="text-gray-400 text-center self-center -mt-5 mb-5">Tell us what do you think</small>
                <input    className="rounded-sm text-black text-xl w-full p-2" type="text" name="user"  placeholder="Name" />
                <input    className="rounded-sm text-black text-xl w-full p-2" type="text" name="mail" placeholder="Mail Address" />
                <textarea className="rounded-sm text-black text-xl w-full p-2" name="comentary" rows={4} cols={50} placeholder="Write your message here" />
                <button className="bg-indigo-500 rounded-md self-center hover:shadow-md hover:shadow-indigo-800 w-1/2 h-10 my-5">Submit</button>
            </div>
            <img className="rounded-r-md w-1/2 h-auto hidden m-0 lg:block" src="src/assets/fondo.jpg" alt="src/assets/nofoto.png" />
        </article>
    </>
}