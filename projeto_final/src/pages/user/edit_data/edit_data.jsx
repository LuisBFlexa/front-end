import { useState } from "react";
import { useUserContext } from "../../../utils/UserContexts";
import { api } from "../../../utils/api/api";
import { photo_url } from "../../../utils/images/photo_url";
import avatar from '../../../utils/images/avatar.jpg'
import { useEffect } from "react";

export default function Editdata () {
    const {user} = useUserContext()
    const [name, setName] = useState(user.name)
    const [last_name, setLastName] = useState(user.last_name)  
    const [email] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [description, setDescription] = useState(user.description)
    const [picture, setPicture] = useState(
        user.profile_picture_url
          ? photo_url.defaults.baseURL + user.profile_picture_url : avatar
          );
    const [file, setFile] = useState([])

    const addPicture = async (files) => {
        const formData = new FormData();
        formData.append("profile_picture[]", files[0]);
        api.patch("users/add_picture",  formData)
        .then((response) => {
            console.log(response);
    })
        .catch((err) => {
            console.log(err)
        });
        }
    

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addPicture(file);
        api.patch('users/update', {"user": {
            "name": name,
            "last_name": last_name,
            "password": password, 
            "email": email,
            "description": description,
            "profile_picture": picture
        }})
        .then((response) =>{
            alert("Dados atualizados");
            console.log(response);
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        setPicture(
            user.profile_picture_url?
            photo_url.defaults.baseURL + user.profile_picture_url : avatar
            )
    }, [user.profile_picture_url])

        
    return( 
        <div className="bg-[#ECECEC] min-w-screen h-screen flex justify-center items-center">
            <div className=" w-1/2 h-fit bg-white rounded-2xl  justify-center  border-0.1 border-black shadow-xl">
                <div>
                    <p className="text-black text-center text-2xl font-inter font-semibold mt-8"> Altere seus dados</p>
                </div>


                <form className="justify-center mx-16 mb-10" onSubmit={handleSubmit}>

                    <div className="flex justify-start mt-10 space-x-10 items-center">
                        <img src= {picture} alt="image" className=" w-52 h-44 border-0.1 border-black rounded-3xl" />:
                        <input type="file" accept="image/*" className=" w-1/3 h-fit rounded-2xl borde-2 border-black" onChange={(ev) => {
                            setFile(ev.target.files);
                            setPicture(URL.createObjectURL(ev.target.files[0]))}}
                        />
                    </div>

                    <div className="mt-10 space-x-5 w-full h-fit flex items-center">
                        <input type="name" placeholder = 'NOVO NOME' className=" border-0.1 border-black rounded-3xl h-10 w-full text-center" value = {name} onChange={(ev) => {
                            setName(ev.target.value)
                        }}
                        />
                        <input type="lastname" placeholder= 'NOVO SOBRENOME' className="border-0.1 border-black rounded-3xl h-10 w-full text-center" value = {last_name} onChange={(ev) => {
                            setLastName(ev.target.value)
                        }} />
                    </div>

                    <div className="my-10 space-y-10 flex flex-col h-fit max-w-full">
                        <input type="text" placeholder = 'NOVA DESCRIÇÃO' className='border-0.1 border-black rounded-3xl h-10 text-center' value = {description} onChange={(ev) => {
                            setDescription(ev.target.value)
                        }}/>
                        <input type="password" placeholder = 'NOVA SENHA' className='border-0.1 border-black rounded-3xl h-10 text-center' value = {password} onChange={(ev) => {
                            setPassword(ev.target.value)
                        }}/>
                    </div>

                    <div className="flex w-full h-fit justify-center items-center">
                    <button type = "submit" className="bg-blue-900 w-1/2 h-12 rounded-3xl mt-10">
                        <p className="text-white text-2xl">Alterar</p>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
