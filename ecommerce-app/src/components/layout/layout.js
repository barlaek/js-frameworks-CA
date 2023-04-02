import { Navigation } from "../navigation/nav";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";


export function Layout() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}