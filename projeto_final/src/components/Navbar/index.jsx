function Navbar() {
    return (
        <nav className="bg-blue-900 text-white h-14 flex items-center">
            <p className="hover:underline px-3 font-inter font-semibold">
                Home
            </p>
            <p className="hover:underline px-3 font-inter font-semibold">
                Posts
            </p>
            <div className="ml-auto flex py-3">
                <p className="hover:underline font-inter font-semibold px-3">
                    Log in
                </p>
                <p className="hover:underline font-inter font-semibold px-3">
                    Criar conta
                </p>
            </div>
        </nav>
    );
}

export default Navbar;