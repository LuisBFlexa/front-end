import { useState } from "react";

export default function SignIn () {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return( 
        <div className="bg-[#ECECEC] min-w-screen h-screen flex justify-center items-center">
            <div className=" w-1/2 h-2/3 bg-white rounded-2xl  justify-center  border-0.1 border-black shadow-xl">
                <div>
                    <p className="text-black text-center text-2xl font-inter font-semibold mt-8"> Faça sua conta</p>
                </div>

                <form className="justify-center mx-16" onSubmit={(ev) => {
                ev.preventDefault();
                console.log(name, lastname, email, password)
                }}>

                    <div className="mt-10 space-x-5 w-full h-fit flex items-center">
                        <input type="name" placeholder = 'NOME' className=" border-0.1 border-black rounded-3xl h-10 w-full text-center" value = {name} onChange={(ev) => {
                            setName(ev.target.value)
                        }}
                        />
                        <input type="lastname" placeholder= 'SOBRENOME' className="border-0.1 border-black rounded-3xl h-10 w-full text-center" value = {lastname} onChange={(ev) => {
                            setLastName(ev.target.value)
                        }} />
                    </div>

                    <div className="my-10 space-y-10 flex flex-col h-fit max-w-full">
                        <input type="email" placeholder = 'EMAIL' className = 'border-0.1 border-black rounded-3xl h-10 text-center' value = {email} onChange={(ev) => {
                            setEmail(ev.target.value)
                        }}/>
                        <input type="password" placeholder = 'SENHA' className='border-0.1 border-black rounded-3xl h-10 text-center' value = {password} onChange={(ev) => {
                            setPassword(ev.target.value)
                        }}/>
                    </div>

                    <div className="flex w-full h-fit justify-center items-center">
                    <button type = "submit" className="bg-blue-900 w-1/2 h-12 rounded-3xl mt-10">
                        <p className="text-white text-2xl">Cadastrar</p>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}