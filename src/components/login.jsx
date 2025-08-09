import { useState } from "react";
import Button from "./button";

function Login() {
    const [isValid, setIsValid] = useState(true);
    function ValidateEmail(e) {
        const email = e.target.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(email)); 
    }
    return (
        <section className="bg-[var(--voilet)] flex flex-col items-center py-16 px-7 sm:px-16" id="login">
            <div className="flex flex-col items-center gap-y-3 md:gap-y-5 lg:gap-y-8 md:max-w-[550px]">
                <small className="text-[var(--gray)] uppercase tracking-[0.4em] font-[500] text-center">35,000+ already joined</small>
                <h3 className="text-center text-[var(--gray)] text-xl sm:text-2xl lg:text-3xl font-[500]">Stay up-to-date with what <br /> we're doing</h3>
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className={`relative rounded-md md:basis-[70%] ${!isValid ? 'bg-[var(--red)] border-2 border-[var(--red)]' : ''}`}>
                        <input type="email" name="email" placeholder="Enter your email address" onBlur={ValidateEmail} className="relative w-full px-5 py-3 rounded-md outline-none placeholder:text-sm" />
                        <span className={`text-[var(--gray)] italic py-1 px-5 text-xs ${!isValid ? 'visible' : 'invisible'}`}>Whoops, make sure it's an email</span>
                        <img src="icon-error.svg" alt="An Error Icon" className={`absolute top-[20%] right-5 ${!isValid ? 'block' : 'hidden'}`} />
                    </div>
                    <Button text="Contact Us" variant="red" className="hover:bg-white font-[500] md:basis-[30%] py-[10px]" />
                </div>
            </div>
        </section>
    );
};

export default Login;