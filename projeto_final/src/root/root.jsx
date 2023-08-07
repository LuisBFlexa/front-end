import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/footer";
import { Navbar } from "../components/Navbar/navbar";

export function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}