import Button from "../button";

function MobileMenu({setIsMenuOpen}) {
    return (
        <nav className="fixed top-0 left-0 w-screen h-screen bg-[var(--blue-glass)] px-8 py-10 flex flex-col justify-between z-10">
            <div className="flex flex-col justify-between gap-y-4">
                <div className="flex justify-around max-[550px]:justify-between border-bottom pb-10">
                    <a href="#">
                        <img src="/logo-bookmark_2.svg" alt="A brand logo" />
                    </a>
                    <button onClick={() => setIsMenuOpen(false)}>
                        <img src="/icon-close.svg" alt="Close icon arrow" className="w-5" />
                    </button>
                </div>
                <ul className="flex flex-col text-[var(--gray)] gap-y-4 uppercase">
                    <li className="pb-4 border-bottom" onClick={() => setIsMenuOpen(false)}><a href="#home">Home</a></li>
                    <li className="pb-4 border-bottom" onClick={() => setIsMenuOpen(false)}><a href="#features">Features</a></li>
                    <li className="pb-4 border-bottom" onClick={() => setIsMenuOpen(false)}><a href="#faqs">Faqs</a></li>
                </ul>
                <div className="flex justify-center">
                    <Button text={"Login"} variant={"transparent"} className="px-8 mt-4 uppercase" onClick={() => {window.location.href = '#login'; setIsMenuOpen(false)}}/>
                </div>
            </div>
            <div className="flex items-center justify-center gap-x-8">
                <a href="#">
                    <img src="/icon-facebook.svg" alt="Facebook Icon" />
                </a>
                <a href="#">
                    <img src="/icon-twitter.svg" alt="Twitter Icon" />
                </a>
            </div>
        </nav>
    );
};

export default MobileMenu;