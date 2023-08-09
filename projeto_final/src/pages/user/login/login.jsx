import { useState } from "react";
import { useUserContext } from "../../../utils/UserContexts";



export default function LogIn () {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const { user, login } = useUserContext()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        login( { email, password })
        .catch((err) =>{
            console.log(err);
            alert(err.response.data)
        })
    }


    return( 
        <main className="bg-[#F0EFEF]">
            <div className="flex justify-center items-center min-w-screen h-screen">
                <div className=" bg-white shadow-xl w-1/3 h-2/3 mb-16 mt-20 flex flex-col rounded-2xl border-0.1 border-black">
                    <div className="mb-16">
                        <p className="text-black text-center text-2xl font-inter font-semibold mt-8"> Login </p>
                    </div>

                    <form className="justify-center mx-16" onSubmit={handleSubmit}>
                        <div className=" flex flex-col h-fit w-full  space-y-10 justify-center">
                            <input type="email" placeholder = 'EMAIL' className = 'border-0.1 border-black rounded-3xl h-10 text-center' value = {email} onChange={(ev) => {
                            setEmail(ev.target.value)}} />
                            <input type="password" placeholder = 'SENHA' className='border-0.1 border-black rounded-3xl h-10 text-center' value = {password} onChange={(ev) => {
                            setPassword(ev.target.value)}}/>
                        </div>
                        <div className="flex w-full h-fit justify-center items-center mt-10">
                        <button type = "submit" className="bg-blue-900 w-1/2 h-12 rounded-3xl mt-10">
                            <p className="text-white text-2xl">Entrar</p>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            
        </main>
    )
}