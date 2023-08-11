import {Link} from 'react-router-dom'


export default function NavbarOut() {
    return (
            <nav className="  bg-blue-900 text-white h-14 flex items-center md:justify-between w-full sticky">
                <div className='flex justify-between items-center'>
                    <span className='text-2xl font-[Poppins] cursor-pointer'>
                        <img className='ml-3 h-10 inline' src="https://cdn-icons-png.flaticon.com/512/1187/1187544.png?w=740&t=st=1691609266~exp=1691609866~hmac=b04594c68609377e004a06579eb12734a81acffe8ac5ffd91778926ab7e53608" alt="Blog" />
                    </span>
                </div>
                <ul className=' md:items-center z-[-1] md:z-auto md:static absolute bg-blue-900 w-full left-0 md:w-auto mx-4 my-6 md:my-0'>
                    <Link to='/' className="hover:underline px-3 font-inter font-semibold mx-4 my-6 md:my-0 ml-10">
                        Home
                    </Link>
                    <Link to='/post' className="hover:underline px-3 font-inter font-semibold mx-4 my-6 md:my-0">
                        Posts
                    </Link>
                
                    <Link to='/login' className="hover:underline font-inter font-semibold px-3 mx-4 my-6 md:my-0">
                        Log in
                    </Link>
                    <Link to='/signin' className="hover:underline font-inter font-semibold px-3 mx-4 my-6 md:my-0">
                        Criar conta
                    </Link>
                </ul>
            </nav>
    );
}
