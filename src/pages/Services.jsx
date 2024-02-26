import AbCardX from "../component/AbCardX";
import Footer from "../component/Footer";

export default function Services (){

    return(
        <div>
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

            <div className="bg-black flex  gap-4 flex-col md:gap-6 p-8 md:px-24 md:py-8">
                <div className="bg-pro-200 p-8 rounded-2xl justify-center items-center">
                    <AbCardX
                        imageSrc="./src/assets/web.svg"
                        title="Web Development"
                        description="This is a sample card description." 
                    />
                </div>
                <div className="bg-pro-200 p-8 rounded-2xl justify-center items-center">
                    <AbCardX
                        imageSrc="./src/assets/web.svg"
                        title="Web Development"
                        description="This is a sample card description." 
                    />
                </div>
                <div className="bg-pro-200 p-8 rounded-2xl justify-center items-center">
                    <AbCardX
                        imageSrc="./src/assets/web.svg"
                        title="Web Development"
                        description="This is a sample card description." 
                    />
                </div>
                <div className="bg-pro-200 p-8 rounded-2xl justify-center items-center">
                    <AbCardX
                        imageSrc="./src/assets/web.svg"
                        title="Web Development"
                        description="This is a sample card description." 
                    />
                </div>
            </div>

             {/*  foote r */}
             <Footer />
        </div>
    );
}