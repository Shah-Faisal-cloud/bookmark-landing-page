function Footer() {
    return (
        <footer className="bg-[var(--blue)] -mt-8 md:-mt-16 flex flex-col md:flex-row px-7 sm:px-16 py-12 gap-y-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20 items-center">
            <a href="#home">
                <img src="logo-bookmark_2.svg" alt="A brand logo" />
            </a>
            <nav>
                <ul className="flex flex-col items-center gap-5 md:flex-row">
                    <li className="links text-[var(--gray)]"><a href="#home">home</a></li>
                    <li className="links text-[var(--gray)]"><a href="#features">features</a></li>
                    <li className="links text-[var(--gray)]"><a href="#faqs">faqs</a></li>
                    {/* <li className="links text-[var(--gray)]"><a href="#">contact</a></li> */}
                </ul>
            </nav>
            <div className="flex flex-col gap-8 md:ml-auto md:flex-row">
                <img src="icon-facebook.svg" alt="Facebook Icon" className="text-[var(--red)] hover:cursor-pointer hover:stroke-current"/>
                <img src="icon-twitter.svg" alt="Twitter Icon" className="text-[var(--red)] hover:cursor-pointer hover:stroke-current"/>
            </div>
        </footer>
    );
};

export default Footer;