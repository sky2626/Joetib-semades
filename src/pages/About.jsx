import AbCardX from "../component/AbCardX";
import AbCard from "../component/AbCard";
import Footer from "../component/Footer";


export default function About() {
    return(
        <div>
            <div 
            className="bg-gradient-to-r from-pro-300 to-pro-200 h-96 flex flex-col justify-center items-center">
                <h1 
                className=" font-bold text-5xl md:text-6xl text-center text-white px-4">
                    About Us
                </h1>
                <p 
                className="p-4 text-slate-400 text-center md:px-24">
                    web development encompasses the creation of websites and web applications, involving front-end, back-end, databases, and hosting.
                    Cloud infrastructure and services to create, deploy, and manage applications with advantages such as scalability, cost efficiency, 
                    and flexibility. Machine learning is a subset of artificial intelligence (AI) that focuses on creating algorithms and models that 
                    enable computers to learn from data and make predictions or decisions without explicit programming.
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

            <div className="bg-pro-200 px-8 py-8 md:px-24">
                <h1 className="text-white text-center font-Cascadia">
                    Meet the team leaders
                </h1>
                <h3 className="text-center text-slate-600 font-Cascadia text-xl">
                    let them handle all your needs.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 py-4"> 
                    <AbCard
                        imageSrc="./src/assets/img-1.png"
                        name="skyoga" 
                        title="UI/Ux designer"
                    />
                    <AbCard
                        imageSrc="./src/assets/img-1.png"
                        name="skyoga" 
                        title="UI/Ux designer"
                    />
                    <AbCard
                        imageSrc="./src/assets/img-1.png"
                        name="skyoga" 
                        title="UI/Ux designer"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
