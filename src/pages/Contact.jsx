import Footer from '../component/Footer'
import { FcPhone } from "react-icons/fc"


export default function Contact () {
    return(
        <div >
            <div 
            className="bg-gradient-to-r from-pro-300 to-pro-200 h-96 flex flex-col justify-center items-center">
                <h1 
                className="font-bold text-5xl md:text-6xl text-center text-white px-4">
                    Let's have a talk
                </h1>
                <p 
                className="p-4 text-slate-400 text-center md:px-24 ">
                We're just one click away to help you take your brand or product from great to incredible. 
                Fill in the form to share more details about your project or your problems. 
                Either way, we’d love to talk.
                </p>
            </div> 
            <div 
            className="bg-pro-200">
                <div 
                className='bg-black flex justify-center items-center md:gap-4 md:overflow-hidden'>
                    <div 
                    className='p-8 bg-pro-300 rounded-md'>
                        <h1 
                        className='text-2xl text-center text-slate-500 font-Cascadia'>Contact Information</h1>
                        <div className='flex justify-start items-start flex-col'>
                            <div 
                            className='flex flex-row p-2 justify-center items-center'>
                                <img 
                                className='h-12 p-2 font-Cascadia' 
                                src="../src/assets/phone-call.svg" 
                                alt="phone img" />
                                <div className='flex flex-col pl-4'>
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
                                className='h-12 p-2 ' 
                                src="../src/assets/mail.svg" 
                                alt="mail img" />
                                <a 
                                className='text-slate-500 font-Cascadia pl-4' 
                                href="mailto:webmaster@example.com">
                                    semades@mail.gh
                                </a>
                            </div>
                            <div 
                            className='flex flex-row p-2 justify-center items-center'>
                                <img 
                                className='h-12 p-2 font-Cascadia' 
                                src="../src/assets/location.svg" 
                                alt="location img" />
                                <a 
                                className='text-slate-500 font-Cascadia p-4' 
                                href="mailto:webmaster@example.com">
                                    Remote
                                </a>
                            </div>
                        </div>
                    </div>
        
                    {/* form section */}
                    <div class="container p-8 bg-pro-300 rounded-md shadow-md max-w-md">
                        <h1 class="text-2xl font-semibold mb-6 text-slate-400">Contact Us</h1>
                        <form action="mailto:semades@mail.com" method="post">
                            <label class="block text-slate-400 text-sm font-bold mb-2" for="name">Name:</label>
                            <input class="w-full bg-pro-300 p-2 border border-slate-500  text-slate-400 rounded-md" type="text" id="name" name="name" required />
                            <label class="block text-slate-400 text-sm font-bold mb-2" for="email">Email:</label>
                            <input class="w-full bg-pro-300 p-2 border border-slate-500 text-slate-400 rounded-md" type="email" id="email" name="email" required />
                            <label class="block text-slate-400 text-sm font-bold mb-2" for="message">Message:</label>
                            <textarea class="w-full bg-pro-300 p-2 border border-slate-500 text-slate-400 rounded-md" id="message" name="message" rows="4" required></textarea>
                            <button class="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700" type="submit">Submit</button>
                        </form>
                    </div>
                </div> 
            </div>

            {/*  foote r */}
            <Footer />
        </div>
    );
}
