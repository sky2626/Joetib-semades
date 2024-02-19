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
                className='bg-pro-200 flex flex-col md:flex-row md:gap-4 px-4 p-12'>
                    <div 
                    className='flex flex-col bg-pro-300 rounded-md p-6'>
                        <h1 
                        className='text-2xl text-center text-slate-500 font-Cascadia'>Contact Information</h1>
                        <div className='flex justify-start items-start flex-col'>
                            <div 
                            className='flex flex-row p-2 justify-center items-center'>
                                <img 
                                className='h-16 p-4 font-Cascadia' 
                                src="../src/assets/phone-call.svg" 
                                alt="phone img" />
                                <div className='flex flex-col'>
                                    <a 
                                    className='text-slate-500 font-Cascadia' 
                                    href="tel:+233546383716">
                                        +233546383716
                                    </a>
                                    <a 
                                    className='text-slate-500 font-Cascadia' 
                                    href="tel:+233546383716">
                                        +233546383716
                                    </a>
                                </div>
                            </div>
                            <div 
                            className='flex flex-row p-2 justify-center items-center'>
                                <img 
                                className='h-16 p-4 ' 
                                src="../src/assets/mail.svg" 
                                alt="mail img" />
                                <a 
                                className='text-slate-500 font-Cascadia' 
                                href="mailto:webmaster@example.com">
                                    semades@mail.gh
                                </a>
                            </div>
                            <div 
                            className='flex flex-row p-2 justify-center items-center'>
                                <img 
                                className='h-16 p-4 font-Cascadia' 
                                src="../src/assets/location.svg" 
                                alt="location img" />
                                <a 
                                className='text-slate-500 font-Cascadia' 
                                href="mailto:webmaster@example.com">
                                    Remote
                                </a>
                            </div>
                        </div>
                    </div>
                    <div 
                    class="flex flex-col gap-2">
                        <input
                        class="rounded-lg text-lg bg-pro-300 h-6 p-5 "
                        type="text" id="full name" name="full Name" placeholder="Name" autocomplere="off" required />
                        <input
                        class="rounded-lg text-lg bg-pro-300 h-6 p-5 "
                        type="text" id="email" name="email" placeholder="Email" autocomplere="off" required />
                        <textarea 
                        className='bg-pro-300 rounded-lg p-4 text-lg '
                        name="message" id="message" placeholder="Please write your message here." cols="30" rows="5"></textarea>
                        <button 
                        class="text-white h-10 rounded-lg text-semibold bg-green-600 p-2">
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
