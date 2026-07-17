import React from "react";
import { Link } from "react-router-dom";
import { servicesDetail } from "../Services/ServicesDetail"

const columns = [
  ["diagnostic-ultrasound", "digital-x-ray", "ct-scan", "mri"],
  ["mammography", "echocardiography", "patient-preparation-positioning"],
  [
    "clinical-documentation",
    "infection-control-safety-standards",
    "professional-communication-teamwork",
  ],
];

const palette = {
  sidebarBg: "#EEF3F7",
  ink: "#10233B",
  link: "#1D4E8F",
  muted: "#5B6B7C",
  hairline: "#E5EAF0",
};

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{ background: "#F7F9FA" }}
    >
      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[300px_1fr] rounded-2xl overflow-hidden shadow-xl bg-white"
        style={{ border: `1px solid ${palette.hairline}` }}
      >
        <div className="p-10 flex flex-col justify-center" style={{ background: palette.sidebarBg }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: palette.muted }}>
            Explore Services
          </p>
          <h1 className="text-3xl leading-tight mb-6 font-semibold" style={{ color: palette.ink }}>
            Diagnostic Imaging Services
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: palette.muted }}>
            Precise, patient-centered imaging and clinical support designed
            to deliver accurate diagnoses with care and efficiency.
          </p>
        </div>

        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-6">
                {col.map((slug) => (
                  <li key={slug}>
                    <Link
                      to={`/services/${slug}`}
                      className="text-[15px] font-medium leading-snug hover:underline"
                      style={{ color: palette.link }}
                    >
                      {servicesDetail[slug].title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div
            className="mt-10 rounded-xl px-5 py-4"
            style={{ border: `1px solid ${palette.hairline}` }}
          >
            <span className="text-sm" style={{ color: palette.muted }}>
              Looking for a specific service?{" "}
              <a href="#" className="font-medium hover:underline" style={{ color: palette.link }}>
                Contact our team
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}