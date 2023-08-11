function Post() {
    return (
        <div className = "bg-white flex justify-around">
            <div className="bg-[#F0EFEF] w-4/5 min-h-screen border-r-0.1 border-l-0.1 border-black justify-center">
        
                {/* CATEGORIA */}
                <div className="mt-16 mx-8 w-max-full h-fit border-b-0.1 border-black">
                    <p className="text-3xl">{Post.category}</p>
                </div>

                <div className="mt-28 w-full max-h-screen justify-center items-center flex"> 
                    <div className="bg-[#D9D9D9] w-1/2 h-fit max-h-4/5">
                        <img src={Post.picture} alt="foto do post" />
                    </div>
                </div>

                <div className="my-20 w-full h-fit max-h-1/5 flex justify-center items-center">
                    <div className="bg-[#D9D9D9] w-fit h-fit max-w-1/2 rounded-2xl border-0.1 border-black">
                        <p className="p-4">
                          {Post.content}  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post