import img from "../assets/image/study.png";

const Footer = () => {
    return (
        <div>
            <footer className="p-10 bg-slate-200 text-blue-800 font-bold flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
                {/* Logo and description */}
                <aside className="w-full md:w-1/2 lg:w-1/4 mb-10 md:mb-0 flex flex-col items-center md:items-start">
                    <img className="h-32 md:h-40 lg:h-64" src={img} alt="Logo" />
                    <p className="mt-4 text-center md:text-left">Providing reliable tech since 1992</p>
                </aside>

                {/* Call Us Section */}
                <nav className="w-full md:w-1/2 lg:w-1/4 mb-10 md:mb-0">
                    <h6 className="footer-title text-center md:text-left">CALL US</h6>
                    <ul className="flex flex-col items-center md:items-start space-y-2 mt-4">
                        <li><a className="link link-hover">+7(111)123456789</a></li>
                        <li><a className="link link-hover">+1(999)987654321</a></li>
                        <li><a className="link link-hover">+9(555)6541123987</a></li>
                    </ul>
                </nav>

                {/* Write Section */}
                <nav className="w-full md:w-1/2 lg:w-1/4 mb-10 md:mb-0">
                    <h6 className="footer-title text-center md:text-left">WRITE</h6>
                    <ul className="flex flex-col items-center md:items-start space-y-2 mt-4">
                        <li><a className="link link-hover">contact@rasif.com</a></li>
                        <li><a className="link link-hover">username@website.com</a></li>
                        <li><a className="link link-hover">rasif@gmail.com</a></li>
                    </ul>
                </nav>

                {/* Visit Section */}
                <nav className="w-full md:w-1/2 lg:w-1/4 mb-10 md:mb-0">
                    <h6 className="footer-title text-center md:text-left">VISIT</h6>
                    <ul className="flex flex-col items-center md:items-start space-y-2 mt-4">
                        <li><a className="link link-hover">1873 CUFL Road</a></li>
                        <li><a className="link link-hover">Bairag, Anowara, SentMartin</a></li>
                        <li><a className="link link-hover">BD</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
