import img from "../assets/image/study.png"


const Footer = () => {
    return (
        <div>
             <footer className="footer p-10 bg-slate-200 text-blue-800 font-bold">
                <aside>
                    <img className="pl-16 h-64" src={img} alt="" />
                    <p className="pl-24">Providing reliable tech since 1992</p>
                </aside> 
                 
                <nav className="mt-16">
                    <h6 className="footer-title">CALL US</h6> 
                    <a className="link link-hover">+7(111)123456789</a>
                    <a className="link link-hover">+1(999)987654321</a>
                    <a className="link link-hover">+9(555)6541123987</a>
                </nav> 
                <nav  className="mt-16">
                    <h6 className="footer-title">WRITE</h6> 
                    <a className="link link-hover">contact@rasif.com</a>
                    <a className="link link-hover">username@website.com</a>
                    <a className="link link-hover">rasif@gmail.com</a>
                </nav>
                <nav  className="mt-16">
                    <h6 className="footer-title">VISIT</h6> 
                    <a className="link link-hover">1873 CUFL Road</a>
                    <a className="link link-hover">Bairag,Anowara,SentMartin</a>
                    <a className="link link-hover">BD</a>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;