import {Link} from 'react-router-dom'
import { useUserContext } from '../../utils/UserContexts';



export default function NavbarIn() {
    const {logout} = useUserContext()

    return (
        <nav className="bg-blue-900 text-white h-14 flex items-center">
            <Link to='' className="hover:underline px-3 font-inter font-semibold">
                Home
            </Link>
            <Link to='posts' className="hover:underline px-3 font-inter font-semibold">
                Posts
            </Link>
            <div  className="ml-auto flex py-3">
                <Link to='profile' className="hover:underline font-inter font-semibold px-3">
                    Perfil
                </Link>
                <Link to= 'login' className="hover:underline font-inter font-semibold px-3 " onClick={logout}>
                    Sair
                </Link>
            </div>
        </nav>
    );
}
