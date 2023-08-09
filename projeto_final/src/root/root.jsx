import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import NavbarIn from "../components/navbar/navbar_loggedin";
import NavbarOut from "../components/navbar/navbar_loggedout";
import { useUserContext } from "../utils/UserContexts";

export default function Root() {
    const {user} = useUserContext()

    return (
        <>
            {user? <NavbarIn /> : <NavbarOut/>}
            <Outlet />
            <Footer />
        </>
    )
}