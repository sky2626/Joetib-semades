

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
        </div>
    );
}
