import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { servicesDetail } from "../Services/ServicesDetail"

const palette = {
  ink: "#10233B",
  link: "#1D4E8F",
  muted: "#5B6B7C",
  hairline: "#E5EAF0",
  teal: "#0E7C86",
  tealSoft: "#DCEEEE",
};

function ServiceOurview() {
  const { slug } = useParams();
  const navigate = useNavigate();
 const service = servicesDetail[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p style={{ color: palette.ink }}>Service not found.</p>
        <Link to="/" className="underline" style={{ color: palette.link }}>
          Back to services
        </Link>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
      {/* Text content — left, fills full height */}
      <div className="flex flex-col justify-center px-10 lg:px-20 py-16 order-2 md:order-1 bg-white">

        <h1
          className="text-4xl lg:text-5xl font-semibold mb-4 leading-tight"
          style={{ color: palette.ink }}
        >
          {service.title}
        </h1>

        <p className="text-base mb-6" style={{ color: palette.muted }}>
          {service.summary}
        </p>

        <p
          className="text-[15px] leading-relaxed mb-8 max-w-xl"
          style={{ color: palette.ink }}
        >
          {service.description}
        </p>

        {service.prep && (
          <div className="mb-10">
            <p
              className="text-sm font-medium uppercase tracking-wide mb-3"
              style={{ color: palette.teal }}
            >
              Preparation
            </p>
            <ul className="space-y-2">
              {service.prep.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px]"
                  style={{ color: palette.ink }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: palette.teal }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Book Appointment CTA */}
        <Link
          to={`/book?service=${slug}`}
          className="inline-block text-sm font-medium px-8 py-3.5 rounded-full text-white hover:opacity-90 transition self-start"
          style={{ backgroundColor: palette.teal }}
        >
          Book Appointment
        </Link>
          <button
          onClick={() => navigate(-1)}
          className="text-sm mt-6 hover:underline self-start"
          style={{ color: palette.muted }}
        >
          ← Back to services
        </button>
      </div>

      {/* Image — right, fills full height */}
      <div className="order-1 md:order-2 h-60 md:h-auto bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    
   
  </>
  );
}

export default ServiceOurview