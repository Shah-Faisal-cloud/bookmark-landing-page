import { useState } from 'react';
import MobileMenu from './MobileMenu.jsx';
import Button from '../button.jsx';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function openMenu () {
        setIsMenuOpen(true);
    };
    return (
        <header className="flex items-center justify-between px-8 py-10 lg:px-20">
            <a href="#">
                <img src="logo-bookmark.svg" alt="A brand logo" className="object-contain" />
            </a>
            <nav className="items-center hidden md:flex gap-x-12">
                <ul className="flex gap-x-8">
                    <li className='links'><a href="#home">home</a></li>
                    <li className='links'><a href="#features">features</a></li>
                    <li className='links'><a href="#faqs">faqs</a></li>
                </ul>
                <Button text="Login" variant="red" className="text-sm uppercase" onClick={() => {window.location.href = '#login'}}/>
            </nav>
            <button className="block md:hidden">
                <img src="/icon-hamburger.svg" alt="Hamburger icon" onClick={openMenu}/>
            </button>
            {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen}/>}
        </header>
    );
};

export default Header;