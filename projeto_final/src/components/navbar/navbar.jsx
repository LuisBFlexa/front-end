import {Link} from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="bg-blue-900 text-white h-14 flex items-center">
            <Link to='' className="hover:underline px-3 font-inter font-semibold">
                Home
            </Link>
            <Link to='posts' className="hover:underline px-3 font-inter font-semibold">
                Posts
            </Link>
            <div  className="ml-auto flex py-3">
                <Link to='login' className="hover:underline font-inter font-semibold px-3">
                    Log in
                </Link>
                <Link to='signin' className="hover:underline font-inter font-semibold px-3">
                    Criar conta
                </Link>
            </div>
        </nav>
    );
}
