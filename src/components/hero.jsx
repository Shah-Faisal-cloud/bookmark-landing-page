import Button from "./button";

function HeroSection() {
    return (
        <section className="relative grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-2 gap-y-10" id="home">
            <div className="md:order-2 justify-self-end">
                <img src="/illustration-hero.png" alt="Hero Image" />
            </div>
            <div className="flex flex-col items-center text-center md:text-start md:items-start md:justify-center px-7 lg:px-16 xl:px-20 gap-y-5 xl:gap-y-8">
                <h1 className="font-[500] text-2xl sm:text-3xl lg:text-4xl text-[var(--blue)]">A Simple BookMark Manager</h1>
                <p className="text-gray-500">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="flex gap-x-4">
                    <Button text="Get it on Chrome" variant="blue" className="tracking-normal font-[500] shadow-2xl shadow-[var(--voilet)] md:text-sm lg:text-base"/>
                    <Button text="Get it on Firefox" variant="gray" className="tracking-normal font-[500] shadow-2xl md:text-sm lg:text-base"/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;