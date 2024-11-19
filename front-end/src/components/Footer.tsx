const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    Made with ❤️ by{" "}
                    <a
                        href="https://boudjemaa-amine.vercel.app/fr" // Replace with your actual portfolio URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Boudjemaa Amine
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
