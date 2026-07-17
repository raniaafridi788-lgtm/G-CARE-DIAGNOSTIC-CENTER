import React from "react";
import { Link } from "react-router-dom";

/**
 * Diagnostic Imaging Services
 * Same structure as the reference "Explore Services" page:
 * left intro panel + 3-column list of service links + contact bar.
 */

const columns = [
  [
    { title: "Diagnostic Ultrasound", slug: "diagnostic-ultrasound" },
    { title: "Digital X-Ray", slug: "digital-x-ray" },
    { title: "CT Scan", slug: "ct-scan" },
    { title: "MRI", slug: "mri" },
  ],
  [
    { title: "Mammography", slug: "mammography" },
    { title: "Echocardiography", slug: "echocardiography" },
    {
      title: "Patient Preparation & Positioning",
      slug: "patient-preparation-positioning",
    },
  ],
  [
    {
      title: "Clinical Documentation",
      slug: "clinical-documentation",
    },
    {
      title: "Infection Control & Safety Standards",
      slug: "infection-control-safety-standards",
    },
    {
      title: "Professional Communication and Teamwork",
      slug: "professional-communication-teamwork",
    },
  ],
];

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
`;

const palette = {
  sidebarBg: "#EEF3F7",
  ink: "#10233B",
  link: "#1D4E8F",
  muted: "#5B6B7C",
  hairline: "#E5EAF0",
};

 function Services() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{ background: "#F7F9FA" }}
    >
      <style>{fonts}</style>

      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[300px_1fr] rounded-2xl overflow-hidden shadow-xl bg-white"
        style={{ border: `1px solid ${palette.hairline}` }}
      >
        {/* Sidebar */}
        <div
          className="p-10 flex flex-col justify-center"
          style={{ background: palette.sidebarBg }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: palette.muted, fontFamily: "'Inter', sans-serif" }}
          >
            Explore Services
          </p>

          <h1
            className="text-3xl leading-tight mb-6"
            style={{
              color: palette.ink,
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
          >
            Diagnostic Imaging Services
          </h1>

          <p
            className="text-[15px] leading-relaxed"
            style={{ color: palette.muted, fontFamily: "'Inter', sans-serif" }}
          >
            Precise, patient-centered imaging and clinical support designed
            to deliver accurate diagnoses with care and efficiency.
          </p>
        </div>

        {/* Service list */}
        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-6">
                {col.map((service) => (
                  <li key={service}>
                    

<Link
  to={`/services/${service.slug}`}
  className="text-[15px] leading-snug hover:underline"
  style={{
    color: palette.link,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
  }}
>
  {service.title}
</Link>

                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Contact bar */}
          <div
            className="mt-10 rounded-xl px-5 py-4 flex items-center justify-between"
            style={{ border: `1px solid ${palette.hairline}` }}
          >
            <span
              className="text-sm"
              style={{ color: palette.muted, fontFamily: "'Inter', sans-serif" }}
            >
              Looking for a specific service?{" "}
              <a
                href="#"
                className="font-medium hover:underline"
                style={{ color: palette.link }}
              >
                Contact our team
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services