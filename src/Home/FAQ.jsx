import { useState } from "react";

const faqs = [
  {
    question:
      "What is the difference between minimally invasive procedures and surgery?",
    answer:
      "Minimally invasive procedures allow physicians to treat conditions using image-guided techniques through tiny access points instead of large incisions. This often means less pain, quicker recovery, and shorter hospital stays compared to traditional surgery.",
  },
  {
    question: "What are the advantages of minimally invasive procedures?",
    answer:
      "Advantages typically include smaller incisions, reduced pain and scarring, lower risk of infection, shorter hospital stays, and a faster return to normal activities.",
  },
  {
    question: "What investigations are required before consultations?",
    answer:
      "Your physician may request blood tests, imaging studies such as an ultrasound or CT scan, and a review of your medical history before your consultation to help plan the best course of treatment.",
  },
  {
    question: "What are the possible risks?",
    answer:
      "As with any medical procedure, there are risks such as bleeding, infection, or reaction to anesthesia. Your physician will discuss the specific risks relevant to your procedure during your consultation.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_10px_rgba(20,40,80,0.05)] overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 text-left px-6 py-6 md:px-7 text-base md:text-lg font-bold text-blue-700"
      >
        <span>{item.question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg leading-none border transition-colors ${
            isOpen
              ? "bg-blue-700 text-white border-blue-700"
              : "bg-white text-blue-700 border-slate-100"
          }`}
        >
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>

      <div
        className="px-6 md:px-7 overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <p className="text-sm md:text-base leading-relaxed text-slate-500 pb-6">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

 function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative max-w-[1100px] mx-auto px-6 py-16 md:py-24 overflow-hidden">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-20 -right-32 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#eaf1fb,transparent_70%)] z-0" />

      <h2 className="relative z-10 text-center text-3xl md:text-4xl font-normal text-slate-800 mb-10">
        Frequently <span className="text-blue-700 font-extrabold">Asked Questions</span>
      </h2>

      <div className="relative z-10 flex flex-col gap-4">
        {faqs.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      <div className="relative z-10 flex justify-center mt-12">
        <a
          href="#"
          className="group inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-900 text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
        >
          Know More
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
export default FaqAccordion