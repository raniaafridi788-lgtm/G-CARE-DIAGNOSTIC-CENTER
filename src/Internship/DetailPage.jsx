import React from "react";
import {
   Clock, MapPin, CalendarClock, Users2, Wallet,
  CheckCircle2, ShieldCheck, FileText, GraduationCap, ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * RadiologyInternshipDetail
 *
 * A single, fully-written internship detail page — content is hardcoded
 * for this specific posting rather than driven by a data array. Edit the
 * text directly below to match your actual program.
 *
 * Props:
 *  - onBack()   optional — called when the student clicks "Back"
 *  - onApply()  optional — called when the student clicks "Apply Now"
 */
export default function RadiologyInternshipDetail({ onApply }) {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-blue-950 px-6 py-3 font-mono text-xs tracking-wide text-teal-100">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_0_3px_rgba(45,212,191,0.25)]" />
          G Care Diagnostic center
        </div>
        <div className="hidden sm:block">INTERNSHIP PORTAL</div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-10">

        {/* Title block */}
        <span className="mt-6 block font-mono text-[11px] uppercase tracking-wide text-teal-600">
          Department of Radiology
        </span>
        <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
          G Care Internship Program
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
          A structured clinical internship for radiologic technology and imaging science students,
          rotating through X-Ray, CT, MRI, and Ultrasound under the direct supervision of licensed
          technologists and staff radiologists.
        </p>

        {/* Key facts strip */}
        <div className="mt-6 grid grid-cols-2 gap-5 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-3">
          <Fact icon={<Clock className="h-4 w-4 text-teal-600" />} label="Duration" value="12 weeks" />
          <Fact icon={<Users2 className="h-4 w-4 text-teal-600" />} label="Commitment" value="20–30 hrs / week" />
          <Fact icon={<MapPin className="h-4 w-4 text-teal-600" />} label="Location" value="Main Campus, Riverside" />
          <Fact icon={<CalendarClock className="h-4 w-4 text-teal-600" />} label="Apply By" value="August 15, 2026" />
          <Fact icon={<CalendarClock className="h-4 w-4 text-teal-600" />} label="Start Date" value="September 8, 2026" />
          <Fact icon={<Wallet className="h-4 w-4 text-teal-600" />} label="Compensation" value="Unpaid — academic credit eligible" />
        </div>

        {/* What you'll do */}
        <Section title="What You'll Do" icon={<GraduationCap className="h-4 w-4 text-teal-600" />}>
          <ul className="space-y-2.5">
            {[
              "Rotate through Diagnostic X-Ray, CT, MRI, and Ultrasound over the internship period",
              "Shadow licensed technologists during routine, urgent, and trauma imaging studies",
              "Assist with patient positioning, prepping, and comfort under direct supervision",
              "Observe protocol selection, contrast administration, and image quality review",
              "Attend weekly case-review sessions with staff radiologists",
              "Complete a supervised competency checklist for each modality rotation",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" /> {t}
              </li>
            ))}
          </ul>
        </Section>

        {/* Eligibility requirements */}
        <Section title="Eligibility Requirements" icon={<FileText className="h-4 w-4 text-teal-600" />}>
          <ul className="space-y-2.5">
            {[
              "Currently enrolled in an accredited radiologic technology, sonography, or medical program",
              "Completed coursework in human anatomy and radiologic physics (or equivalent)",
              "Minimum cumulative GPA of 2.75 / 4.0",
              "Letter of good standing or recommendation from a faculty advisor",
              "Able to commit to the full 12-week rotation schedule, including some weekend shifts",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" /> {t}
              </li>
            ))}
          </ul>
        </Section>

        {/* Health & compliance requirements */}
        <Section title="Health & Compliance Requirements" icon={<ShieldCheck className="h-4 w-4 text-teal-600" />}>
          <p className="mb-3 text-sm text-slate-500">
            These must be completed and documented before your first day on the imaging floor.
          </p>
          <ul className="space-y-2.5">
            {[
              "Up-to-date immunization records, including TB screening within the last 12 months",
              "Completed HIPAA / patient privacy training certificate",
              "Radiation safety orientation (can be scheduled through the program office if not yet completed)",
              "Clear background check issued within the past 6 months",
              "Proof of health insurance coverage for the duration of the placement",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" /> {t}
              </li>
            ))}
          </ul>
        </Section>

        {/* Required documents */}
        <Section title="Documents to Have Ready" icon={<FileText className="h-4 w-4 text-teal-600" />}>
          <ul className="space-y-2.5">
            {[
              "Current academic transcript",
              "Updated CV or résumé",
              "Faculty advisor recommendation letter",
              "Government-issued photo ID",
              "Registration payment screenshot (Must)"
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" /> {t}
              </li>
            ))}
          </ul>
        </Section>

        {/* Selection process */}
        <Section title="Selection Process" icon={<Users2 className="h-4 w-4 text-teal-600" />}>
          <ol className="space-y-3">
            {[
              ["Application review", "The program office reviews all completed applications after the deadline."],
              ["Interview", "Shortlisted applicants are invited for a brief interview with the program director."],
              ["Offer & onboarding", "Selected students receive an offer along with compliance and orientation paperwork."],
            ].map(([title, desc], i) => (
              <li key={title} className="flex gap-3 text-sm">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-950 font-mono text-xs text-white">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-slate-800">{title}</div>
                  <div className="text-slate-500">{desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Apply CTA */}
        <div className="mt-10 flex flex-col items-start gap-3 rounded-lg border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-800">Ready to apply?</div>
            <div className="text-xs text-slate-500">Applications close August 15, 2026.</div>
          </div>
          <button
          type="button"
        onClick={() => navigate("/internship-form")}
         className="flex items-center justify-center gap-2 rounded-md bg-blue-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-600"
>
  Apply Now <ArrowRight className="h-4 w-4" />
</button>
        </div>
      </div>
    </div>
  );
}

function Fact({ icon, label, value }) {
  return (
    <div>
      <div className="mb-1.5">{icon}</div>
      <div className="text-xs text-slate-400">{label}</div>
      <div className="text-sm font-semibold text-slate-800">{value}</div>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <section className="mt-9">
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-950">
        {icon} {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

/* ============================================================
   USAGE
   ============================================================
   import RadiologyInternshipDetail from "./RadiologyInternshipDetail.jsx";
   import RadiologyInternshipForm from "./RadiologyInternshipForm.jsx";
   import { useState } from "react";

   export default function App() {
     const [page, setPage] = useState("detail"); // or "apply"

     return page === "detail" ? (
       <RadiologyInternshipDetail onApply={() => setPage("apply")} />
     ) : (
       <RadiologyInternshipForm
         internshipTitle="Radiology Internship Program"
         backLink={{ href: "#", label: "Back to details" }}
       />
     );
   }

   With react-router-dom instead, swap setPage(...) calls for
   navigate("/apply") and navigate("/internships") — same idea.
============================================================ */