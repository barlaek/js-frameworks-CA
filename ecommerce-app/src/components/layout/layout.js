import { Header } from "../navigation/nav";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";


export function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}