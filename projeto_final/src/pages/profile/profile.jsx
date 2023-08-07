function Profile() {
    return (
        <div className = "bg-white flex justify-around">
            <div className="bg-[#F0EFEF] w-4/5 min-h-screen border-r-0.1 border-l-0.1 border-black">
                {/* Foto e capa */}
                <div className="bg-[#CECECE] w-full h-40 flex items-end justify-between">
                    <img src = {user.picture} alt="Foto de Perfil" className=" ml-10 mb-2 border-2  bg-white w-48 h-36 rounded-3xl"/>
                    <p className="mr-40 text-4xl text-white">{user.name}</p>
                </div>

                {/* Descrição */}
                <div className="mt-16 w-full flex"> 
                    <div className="mr-6 ml-6 w-full h-fit bg-white rounded-3xl ">
                        <div className="p-5 h-fit w-fit">
                            <p className="pb-4">Descrição</p>
                            <div className="bg-gray-400 rounded-3xl">
                                <p className="p-2">{user.description}
                                </p>
                            </div>
                        </div>  
                    </div>    
                </div>

                {/* INTERACOES */}
                <div className="mt-16 ml-8 w-60 h-fit border-b-0.1 border-black">
                    <p className="text">INTERAÇÕES</p>
                </div>

                {user.feedbacks.map((feedback) =>
                <div className="flex justify-center">
                    <div className="flex w-4/5 h-fit my-10 justify-left">
                        <div className="bg-[#D9D9D9] w-96 h-fit flex-col">
                            <img className="w-full h-72" src= {feedback.post_picture}  alt="Capa de Post" />
                            <p className="my-3 text-center text-white text-2xl">{feedback.post_name}</p>
                        </div>

                        <div className="bg-white w-fit h-fit flex rounded-3xl  max-w-full mx-20 my-12 items-center">
                            <img src= {user.picture} alt="imagem de perfil" className="w-20 h-20 rounded-3xl" />
                            <p className="p-2 w-fit"> {feedback.comment}</p>
                        </div>
                    </div>
                </div>
)}
            </div>
        </div>
    )
}

export default Profile