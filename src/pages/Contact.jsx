

export default function Contact () {
    return(
        <div >
            <div 
            className="bg-gradient-to-r from-pro-300 to-pro-200 h-96 flex justify-center items-center">
                <h1 
                className="font-Cascadia font-extrabold text-5xl md:text-6xl text-center text-white px-4">Let's have a talk</h1>
            </div> 
            <div 
            className="bg-pro-200">
                <p 
                className="p-4 text-white text-2xl md:px-24">
                We're just one click away to help you take your brand or product from great to incredible. 
                Fill in the form to share more details about your project. Or your favorite gum flavor. 
                Either way, we’d love to talk.
                </p>
                <div 
                className='bg-pro-200 flex px-24 py-16 justify-center md:gap-16 lg:gap- md:px-24 '>
                    <div 
                    class="flex flex-col gap-2 md:justify-start md:items-start ">
                        <input
                        class="rounded-lg text-lg bg-pro-300 h-6 md:w-96 p-5 "
                        type="text" id="full name" name="full Name" placeholder="Name" autocomplere="off" required />
                        <input
                        class="rounded-lg text-lg bg-pro-300 h-6 md:w-96 p-5 "
                        type="text" id="email" name="email" placeholder="Email" autocomplere="off" required />
                        <textarea 
                        className='bg-pro-300 rounded-lg p-4 text-lg md:w-96 '
                        name="message" id="message" placeholder="Please write your message here." cols="30" rows="5"></textarea>
                        <button 
                        class="text-white h-10 rounded-lg text-semibold bg-green-600 p-2 md:w-96">
                            Submit
                        </button>
                    </div>
                    <img className='hidden md:block h-80 ' src="./src/assets/support.svg " alt="img of support" />
                </div> 
            </div>
        </div>
    );
}
