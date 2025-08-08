import Button from "./button";

function Extension() {
    return (
        <section className="flex flex-col items-center gap-y-5 px-7 sm:px-16">
            <h2 className="font-[500] text-xl sm:text-2xl lg:text-4xl text-[var(--blue)]">Download the extension</h2>
            <p className="text-center text-gray-500 max-w-[550px]">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            <div className="flex flex-col flex-wrap gap-y-8 md:gap-x-5 xl:gap-x-10 md:flex-row md:justify-center">
                <ExtensionCard browser="chrome" minVersion="62" />
                <ExtensionCard browser="firefox" minVersion="55" className="md:translate-y-8"/>
                <ExtensionCard browser="opera" minVersion="46" className="md:translate-y-16"/>
            </div>
        </section>
    )
}

function ExtensionCard({ browser, minVersion, className=""}) {
    return (
        <div className={`flex flex-col justify-between min-h-[350px] min-w-[250px] items-center shadow-xl py-8 rounded-lg ${className}`}>
                <img src={`logo-${browser}.svg`} alt={`${browser} icon`} />
            <div className="flex flex-col items-center gap-y-1">
                    <h3 className="font-[500] text-[var(--blue)] text-lg sm:text-xl lg:text-2xl">Add to {browser}</h3>
                    <span className="text-gray-400">Minimum Version {minVersion}</span>
            </div>
            <div className="flex flex-col items-center gap-y-5">
                <img src="bg-dots.svg" alt="A line of dots" />
                <Button text="Add & install extension" variant="blue" />
            </div>
        </div>
    )
}

export default Extension;