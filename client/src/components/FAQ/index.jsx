import React, { useState } from "react";
import { FaAngleUp , FaAngleDown } from "react-icons/fa6";
import faqData from "../../data/faq";

const FAQ = () => {
const [active, setActive] = useState(null);

const toggleFAQ = (index) => {
setActive(active === index ? null : index);
};

return ( <section
   id="faq"
        className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
        >
        {/* Background Effects */} <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse" /> <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#232466]/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute top-32 right-[15%] w-4 h-4 rounded-full bg-[#EF5622] animate-bounce" />

        <div
            className="absolute bottom-32 left-[15%] w-3 h-3 rounded-full bg-[#232466] animate-bounce"
            style={{ animationDelay: "1s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center mb-16">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#EF5622]/10 text-[#EF5622] font-semibold text-sm border border-[#EF5622]/20 mb-6">
                Frequently Asked Questions
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#232466] leading-tight mb-6">
                Everything You Need
                <br />
                <span className="text-[#EF5622]">To Know</span>
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
                Find answers to the most common questions about our services,
                products, support, installation, and project execution process.
            </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {faqData.map((faq, index) => (
                <div
                key={index}
                className={`group rounded-3xl bg-white border overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                    active === index
                    ? "border-[#EF5622] shadow-[0_20px_60px_rgba(239,86,34,0.15)]"
                    : "border-slate-200 hover:border-[#232466]/20 hover:shadow-xl"
                }`}
                >
                <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                    <h3 className="text-base md:text-lg font-semibold text-[#232466] pr-4">
                    {faq.question}
                    </h3>

                    <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        active === index
                        ? "bg-[#EF5622] text-white rotate-180"
                        : "bg-[#232466] text-white"
                    }`}
                    >
                    {active === index ? <FaAngleDown /> : <FaAngleDown  />}
                    </div>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    active === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

);
};

export default FAQ;
