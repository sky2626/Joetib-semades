import Card from "../component/Card";
import AbCard from "../component/AbCard";


export default function About() {
    return(
        <div>
            <div 
            className="bg-gradient-to-r from-pro-300 to-pro-200 h-96 flex flex-col justify-center items-center">
                <h1 
                className="font-Cascadia font-extrabold text-5xl md:text-6xl text-center text-white px-4">
                    About Us
                </h1>
                <p 
                className="p-4 text-slate-400 text-center md:px-24 font-Cascadia">
                    web development encompasses the creation of websites and web applications, involving front-end, back-end, databases, and hosting.
                    Cloud infrastructure and services to create, deploy, and manage applications with advantages such as scalability, cost efficiency, 
                    and flexibility. Machine learning is a subset of artificial intelligence (AI) that focuses on creating algorithms and models that 
                    enable computers to learn from data and make predictions or decisions without explicit programming.
                </p>
            </div>  

            <div className="bg-pro-200">
                <div className="bg-pro-200 w-62 md:w-56 rounded-lg">
                    <Card
                        imageSrc="./src/assets/web.svg"
                        title="Web Development"
                        description="This is a sample card description." 
                    />
                </div>
            </div>

            <div>
                <h1 className="text-center">
                    Meet the team leaders
                </h1>
                <h3 className="text-center">
                    let them handle all your needs.
                </h3>
                <div>
                    <AbCard
                        imageSrc="./src/assets/"
                        name="skyoga" 
                        title="UI/Ux designer"
                    />

                </div>
            </div>
        </div>
    );
}
