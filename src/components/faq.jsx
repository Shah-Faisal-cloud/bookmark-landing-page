import { useState } from "react";
import Button from "./button";

function Faq() {
    const faqs = [
        {
            question: "What is Bookmark?",
            answer: "A bookmark is a saved link to a specific webpage so you can easily return to it later. It’s like a shortcut for frequently visited sites.",
        },
        {
            question: "How can I request a new browser?",
            answer: "You can request a new browser by reaching out to us through the contact form. We’re always open to feedback and love hearing what you’d like next on Bookmark.",
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes, Bookmark has a mobile app! You can easily access your bookmarks on the go by downloading it from the App Store (iOS) or Google Play (Android). Sync happens automatically.",
        },
        {
            question: "What about other chromium browsers?",
            answer: "Bookmark is optimized for Chrome, but many Chromium-based browsers (like Brave, Edge, or Vivaldi) already support it. Still, for the best experience, we recommend Chrome while we continue improving cross-browser support.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <section className="flex flex-col items-center px-7 gap-y-12 lg:gap-y-16 sm:px-16 md:mt-10" id="faqs">
            <div className="flex flex-col items-center gap-y-3">
                <h2 className="font-[500] text-xl sm:text-2xl lg:text-4xl text-[var(--blue)]">Frequently Asked Questions</h2>
                <p className="text-center text-gray-500 max-w-[550px]">Here are some of our FAQs. If you have any other questions you'd liked answer, please feel free to email us.</p>
            </div>
            <div className="max-w-[550px] w-full flex flex-col gap-y-6">
                {faqs.map((faq, index) => {
                    function toggle() {
                        setOpenIndex(openIndex === index ? null : index);
                    };
                    return (
                        <div className="flex flex-col gap-5" key={index}>
                            <button className="flex justify-between pb-5 border-b text-start gap-x-5" onClick={toggle}>
                                <span className="text-[var(--blue)] font-[500] hover:text-[var(--red)] transition-colors duration-300 ease-in">{faq.question}</span>
                                <img src="/icon-arrow.svg" alt="" className={`object-contain transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`transition-all duration-300 ease-linear ${openIndex === index ? "max-h-20" : "max-h-0"}`}>
                                {openIndex === index && <p className="w-full text-gray-500">{faq.answer}</p>}
                            </div>
                        </div>
                    )
                })}
                <Button text="More Info" variant="blue" className="self-center"/>
            </div>
        </section>
    );
};

export default Faq;