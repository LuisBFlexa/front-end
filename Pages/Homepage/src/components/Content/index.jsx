function Content() {
    return(
        <main className=" bg-[#F0EFEF]">
            <h1 className="mt-10 ml-64 w-72 text-transparent bg-clip-text bg-gradient-to-r to-[#001971] from-[#c4c4c4]  tracking-wider font-bold font-serif text-4xl">CATEGORIAS</h1>
            <div className=" flex justify-center space-x-60 mt-20 ">
                <div className="hover:saturate-200 shadow-lg shadow-[#001971] flex rounded-3xl bg-blue-900 w-96 ">
                    <a href="#">
                        <img className="  rounded-t-3xl h-48 w-96" src="https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png" alt="" />
                        <div className="p-4 ">
                        <h5 className=" hover:underline mb-2 text-2xl text-white text-center font-sans font-bold  leading-tight">Programação</h5>
                    </div>
                    </a>
                </div>
                <div className="hover:saturate-200 shadow-lg shadow-[#001971] flex rounded-3xl bg-blue-900 w-96 ">
                    <a href="#">
                        <img className=" rounded-t-3xl h-48 w-96" src="https://static.vecteezy.com/ti/vetor-gratis/p1/12613662-pipoca-bonito-dos-desenhos-animados-com-pipoca-e-bebida-pronta-gratis-vetor.jpg" alt="" />
                        <div className="p-4 ">
                        <h5 className="hover:underline mb-2 text-2xl text-white text-center font-sans font-bold  leading-tight">Filmes</h5>
                    </div>
                    </a>
                </div>
                
            </div>
            <div className="  flex justify-center space-x-60  mt-20 mb-20">
                <div className="hover:saturate-200 shadow-lg shadow-[#001971] flex rounded-3xl bg-blue-900 w-96 ">
                    <a href="#">
                        <img className=" rounded-t-3xl h-48 w-96" src="https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/images/fb078a99e2bc73d4375c52ae7f26671c" alt="" />
                        <div className="p-4 ">
                        <h5 className="hover:underline mb-2 text-2xl text-white text-center font-sans font-bold  leading-tight">Política</h5>
                    </div>
                    </a>
                </div>
                <div className=" hover:saturate-200 shadow-lg shadow-[#001971] flex rounded-3xl bg-blue-900 w-96 ">
                    <a href="#">
                        <img className=" rounded-t-3xl h-48 w-96" src="https://cdn.imp-multimedia.com/logos/br/cupom-de-desconto-pc-games.jpg" alt="" />
                        <div className="p-4 ">
                        <h5 className="hover:underline mb-2 text-2xl text-white text-center font-sans font-bold  leading-tight">Games</h5>
                    </div>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col  bg-blue-900 h-16" >

            </div>
        </main>
        
        
    )
}
export default Content