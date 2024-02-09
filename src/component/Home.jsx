

export default function Home(){
   
    return(
        <div className="bg-pro-200 ">
           {/*  Hero section */}
            <div className="bg-gradient-to-l from-pro-300 flex flex-col md:flex-row gap-2" >
                <div className="flex flex-col justify-center p-10">
                    <h1 className="text-xl font-semibold">
                        We are Creative and Innovative developers
                    </h1>      
                    <p>Tackling a wide range of global issues is our main core focus. Education,Bussiness, Human Rights, Poverty Alleviation, Global Connectivity, and health fall in our scope.
                    </p> 
                    <button
                    className="">
                        learn more
                    </button>
                </div>
                <div className="">
                    <img className="h-96 md:h-120 md:w-120 md:pt-2" src="./src/assets/globe.svg" alt="svg of globe" />
                </div>
               
            </div>
        </div>
    );
}