import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen-hero">
            <Navbar />
            <main className="min-h-screen-hero">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
