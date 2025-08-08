import { useState } from "react";
import Button from "./button";

function Features() {
    const [activeTab, setActiveTab] = useState(0);
    const features = [
        {
            title: "Simple Bookmarking",
            img: "illustration-features-tab-1.svg",
            heading: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag and drop interface gives you complete control over how you manage your favourite sites.",
        },
        {
            title: "Speedy Searching",
            img: "illustration-features-tab-2.svg",
            heading: "Intelligent Search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        },
        {
            title: "Easy Sharing",
            img: "illustration-features-tab-3.svg",
            heading: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
        }
    ]

    return (
        <section className="flex flex-col gap-y-10 sm:gap-y-16" id="features">
            <div className="flex flex-col items-center gap-y-5 px-7 sm:px-16">
                <h2 className="font-[500] text-xl sm:text-2xl lg:text-4xl text-[var(--blue)]">Features</h2>
                <p className="pb-5 text-center text-gray-500 max-w-[550px]">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <div className="flex flex-col w-full md:justify-center md:flex-row">
                    {features.map((tab, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`p-5 border-b border-gray-300 xl:px-8 hover:text-[var(--red)] transition-colors duration-300 ease-in ${activeTab === 1 ? "border-t md:border-t-0" : "border-t-0"}`}>
                                <span className={activeTab === index ? "relative inline-block active-tab" : ""}>{tab.title}</span>
                            </button>
                        );
                    })};
                </div>
            </div>
            <div className="grid grid-rows-[auto_auto] gap-8 md:grid-cols-2 md:grid-rows-1">
                <div className="pr-10">
                    <img src={features[activeTab].img} alt="An SVG image" className="object-contain" />
                </div>
                <div className="flex flex-col items-center md:items-start px-7 gap-y-3 lg:gap-y-5 xl:gap-y-7 md:justify-center">
                    <h3 className="font-[500] text-xl sm:text-2xl lg:text-3xl text-[var(--blue)]">{features[activeTab].heading}</h3>
                    <p className="text-center md:text-start max-w-[450px]">{features[activeTab].description}</p>
                    <Button text="More Info" variant="blue" className="hidden md:inline-flex" />
                </div>
            </div>
        </section>
    );
};

export default Features;