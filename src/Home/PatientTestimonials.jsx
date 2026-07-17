import { useRef } from "react";
import {
  Star,
  UserRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Malik",
    location: "DHA",
    rating: 5,
    quote:
      "I was facing severe fibroid symptoms that were affecting my daily life. After undergoing Uterine Fibroid Embolization, my condition improved remarkably without surgery. The procedure was comfortable, and recovery was very quick. I truly appreciate the care and professionalism of the medical team.",
  },
  {
    name: "Ahmed Raza",
    location: "Gulberg",
    rating: 5,
    quote:
      "I had been dealing with discomfort due to varicocele for a long time. The embolization procedure was simple and minimally invasive, and I experienced relief within a short period. The doctors explained everything clearly and made the entire process stress-free.",
  },
  {
    name: "Sana Khan",
    location: "Model Town",
    rating: 5,
    quote:
      "I was worried about thyroid treatment options until I learned about Radiofrequency Ablation. The procedure was safe, painless, and required no surgery. My symptoms improved significantly, and recovery was smooth.",
  },
  {
    name: "Bilal Ahmed",
    location: "Lahore",
    rating: 5,
    quote:
      "My leg pain and varicose veins were affecting my daily routine, but Varicose Vein Ablation completely changed my condition. The treatment was quick, and I was able to walk normally again within days.",
  },
  {
    name: "Farah Iqbal",
    location: "Allama Iqbal Town",
    rating: 5,
    quote:
      "Living with chronic back pain from a herniated disc was exhausting until I had a minimally invasive spinal procedure here. The team was attentive at every step, and I was back to my normal routine within a week.",
  },
  {
    name: "Usman Tariq",
    location: "Rawalpindi",
    rating: 5,
    quote:
      "I underwent Prostate Artery Embolization after struggling with symptoms for months. The procedure avoided surgery entirely, and my recovery was faster than I expected.",
  },
  {
    name: "Hina Sheikh",
    location: "Faisalabad",
    rating: 5,
    quote:
      "Chronic migraines had taken over my life until I found this clinic. The interventional treatment I received made a real difference within weeks.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < rating ? "#fbbf24" : "none"}
          stroke="#fbbf24"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative shrink-0 w-[300px] h-[500px] rounded-3xl overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
        <UserRound
          className="w-32 h-40 text-white/25 -mt-12"
          strokeWidth={1}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        <p className="text-white text-sm leading-relaxed mb-6 line-clamp-6">
          {testimonial.quote}
        </p>

        <h3 className="text-white text-xl font-bold">
          {testimonial.name}
        </h3>

        <p className="text-white/70 text-sm mb-3">
          {testimonial.location}
        </p>

        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

export default function PatientTestimonial() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -326,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 326,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-5 py-2 text-sm font-medium text-slate-700 shadow">
          <svg
            className="w-3.5 h-3.5 text-blue-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>

          What People Says
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-normal text-slate-800">
          Patient{" "}
          <span className="text-blue-700 font-extrabold">
            Testimonials
          </span>
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 py-8 scrollbar-hide scroll-smooth"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}