import Footer from '../component/Footer'
import { FcPhone } from "react-icons/fc"


export default function Contact () {
    return(
        <div >
            <div 
            className="bg-gradient-to-r from-pro-300 to-pro-200 h-96 flex flex-col justify-center items-center">
                <h1 
                className="font-Cascadia font-extrabold text-5xl md:text-6xl text-center text-white px-4">
                    Let's have a talk
                </h1>
                <p 
                className="p-4 text-slate-400 text-center md:px-24">
                We're just one click away to help you take your brand or product from great to incredible. 
                Fill in the form to share more details about your project or your problems. 
                Either way, we’d love to talk.
                </p>
            </div> 
            <div 
            className="bg-pro-200">
                
                <div 
                className='bg-pro-200 flex flex-col px-4 md:px-24 '>
                    <div className='py-4'>
                        <h1 className='text-center text-2xl text-slate-500'>Contact Information</h1>
                        <div className='flex flex-row justify-center items-center'>
                            <img className='h-16 p-4' src="../src/assets/mail.svg" alt="mail img" />
                            <a className='text-xl text-slate-500' href="mailto:webmaster@example.com">semades@mail.gh</a>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <img className='h-16 p-4' src="../src/assets/mail.svg" alt="mail img" />
                            <a className='text-xl text-slate-500' href="mailto:webmaster@example.com">semades@mail.gh</a>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <img className='h-16 p-4' src="../src/assets/mail.svg" alt="mail img" />
                            <a className='text-xl text-slate-500' href="mailto:webmaster@example.com">semades@mail.gh</a>
                        </div>
                    </div>
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
                </div> 
            </div>

            {/*  foote r */}
            <Footer />
        </div>
    );
}
