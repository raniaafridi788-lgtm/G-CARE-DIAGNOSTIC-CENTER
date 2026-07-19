import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Check, UploadCloud, FileText, CircleCheck } from "lucide-react";


const SECTIONS = [
  { id: "personal", label: "Personal Information", required: ["fullName", "dob", "nationality", "phone", "email", "address", "city"] },
  { id: "academic", label: "Academic Background", required: ["school", "program", "year"] },
  { id: "preferences", label: "Internship Preferences", required: ["startDate", "endDate"] },
  { id: "documents", label: "Documents & Declaration", required: ["agree"] },
];

const MODALITIES = [
  "Diagnostic X-Ray",
  "CT",
  "MRI",
  "Ultrasound",
  "Mammography",
  "Echocardiography",
];



function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-slate-500">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-100";

  function InternshipForm() {
  const [data, setData] = useState({
    fullName: "", dob: "", gender: "", nationality: "",
    phone: "", email: "", address: "", city: "", state: "", postal: "",
    emName: "", emPhone: "",
    school: "", studentId: "", program: "", year: "", gradDate: "", gpa: "", advisor: "", coursework: "",
    startDate: "", endDate: "", hours: "",
    agree: false,
  });
  const [modalities, setModalities] = useState([]);
  const [files, setFiles] = useState([]);
  const [activeSection, setActiveSection] = useState("personal");
  const [submitted, setSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const formRef = useRef(null);
  const sectionRefs = useRef({});

  const setSectionRef = useCallback((id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const els = Object.values(sectionRefs.current);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = Object.entries(sectionRefs.current).find(([, node]) => node === entry.target);
            if (match) setActiveSection(match[0]);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

 const doneMap = useMemo(() => {
  const map = {};

  SECTIONS.forEach((sec) => {
    map[sec.id] = sec.required.every((key) => {
      const val = data[key];
      return typeof val === "boolean"
        ? val
        : String(val || "").trim() !== "";
    });
  });

  return map;
}, [data]);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleModality = (name) => {
    setModalities((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : prev.length < 3 ? [...prev, name] : prev
    );
  };

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files || []).map((f) => f.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      setShowErrors(true);
      return;
    }
    setSubmitted(true);
  };



  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-blue-950 px-6 py-3 font-mono text-xs tracking-wide text-teal-100">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_0_3px_rgba(45,212,191,0.25)]" />
        G CARE DIAGNOSTIC CENTER
        </div>
        <div className="hidden sm:block">INTERNSHIP PORTAL</div>
      </div>
  

      {/* Header */}
      <div className="mx-auto max-w-5xl border-b border-slate-200 px-6 pb-7 pt-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
               Internship Application
            </h1>
            <p className="mt-2 max-w-lg text-sm text-slate-500">
              Complete every required field below. You&apos;ll receive a confirmation email once your
              application and supporting documents have been received.
            </p>
          </div>
          <div className="text-right font-mono text-xs leading-7 text-slate-500">
            <div>CYCLE: <span className="font-semibold text-slate-800">FALL 2026</span></div>
            <div>FORM REV: <span className="font-semibold text-slate-800">v2.1</span></div>
            <div>EST. TIME: <span className="font-semibold text-slate-800">8–10 MIN</span></div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-9 md:grid-cols-[220px_1fr]">
        {/* Rail */}
        <nav className="sticky top-6 hidden self-start border-l-2 border-slate-200 pl-5 md:block">
          <span className="mb-3 block font-mono text-[11px] tracking-wide text-slate-400">SECTIONS</span>
          <ul className="space-y-1">
            {SECTIONS.map((sec, i) => {
              const isActive = activeSection === sec.id;
              const isDone = doneMap[sec.id];
              return (
                <li key={sec.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(sec.id)}
                    className="flex w-full items-start gap-2.5 py-2 text-left"
                  >
                    <span
                      className={
                        "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-[11px] font-mono transition " +
                        (isDone
                          ? "border-teal-600 bg-teal-600 text-white"
                          : isActive
                          ? "border-blue-950 bg-blue-950 text-white"
                          : "border-slate-300 bg-white text-slate-400")
                      }
                    >
                      {isDone ? <Check className="h-3 w-3" /> : i + 1}
                    </span>
                    <span className={"pt-0.5 text-sm " + (isActive ? "font-semibold text-slate-900" : "font-medium text-slate-500")}>
                      {sec.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

          {/* 1. Personal */}
          <section id="personal" ref={setSectionRef("personal")} className="scroll-mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative overflow-hidden bg-blue-950 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/30 px-2 py-0.5 font-mono text-xs text-white">01</span>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Personal Information</h2>
              </div>
            </div>
            <div className="space-y-5 px-6 py-6">
              <Field label="Full legal name" required>
                <input required value={data.fullName} onChange={handleChange("fullName")} placeholder="e.g., Ayesha Raza Khan" className={inputClasses} />
              </Field>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Field label="Date of birth" required>
                  <input type="date" required value={data.dob} onChange={handleChange("dob")} className={inputClasses} />
                </Field>
                <Field label="Gender">
                  <select value={data.gender} onChange={handleChange("gender")} className={inputClasses}>
                    <option value="">Select…</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </Field>
                <Field label="Nationality" required>
                  <input required value={data.nationality} onChange={handleChange("nationality")} className={inputClasses} />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Phone number" required>
                  <input type="tel" required value={data.phone} onChange={handleChange("phone")} placeholder="+92 (___) ___-____" className={inputClasses} />
                </Field>
                <Field label="Email address" required>
                  <input type="email" required value={data.email} onChange={handleChange("email")} placeholder="you@example.com" className={inputClasses} />
                </Field>
              </div>
              <Field label="Mailing address" required>
                <input required value={data.address} onChange={handleChange("address")} placeholder="Street address" className={inputClasses} />
              </Field>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Field label="City" required>
                  <input required value={data.city} onChange={handleChange("city")} className={inputClasses} />
                </Field>
                <Field label="State / Province">
                  <input value={data.state} onChange={handleChange("state")} className={inputClasses} />
                </Field>
                <Field label="Postal code">
                  <input value={data.postal} onChange={handleChange("postal")} className={inputClasses} />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Emergency contact name & relationship">
                  <input value={data.emName} onChange={handleChange("emName")} placeholder="e.g., Mother — Fatima Khan" className={inputClasses} />
                </Field>
                <Field label="Emergency contact phone">
                  <input type="tel" value={data.emPhone} onChange={handleChange("emPhone")} className={inputClasses} />
                </Field>
              </div>
            </div>
          </section>

          {/* 2. Academic */}
          <section id="academic" ref={setSectionRef("academic")} className="scroll-mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="bg-blue-950 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/30 px-2 py-0.5 font-mono text-xs text-white">02</span>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Academic Background</h2>
              </div>
            </div>
            <div className="space-y-5 px-6 py-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Institution / medical school" required>
                  <input required value={data.school} onChange={handleChange("school")} className={inputClasses} />
                </Field>
                <Field label="Student ID number">
                  <input value={data.studentId} onChange={handleChange("studentId")} className={inputClasses} />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Program / degree" required>
                  <select required value={data.program} onChange={handleChange("program")} className={inputClasses}>
                    <option value="">Select…</option>
                    <option>MBBS</option>
                    <option>MD</option>
                    <option>BS Radiologic Technology</option>
                    <option>Diagnostic Medical Sonography</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Current year / semester" required>
                  <input required value={data.year} onChange={handleChange("year")} placeholder="e.g., Year 4, Semester 7" className={inputClasses} />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Field label="Expected graduation date">
                  <input type="date" value={data.gradDate} onChange={handleChange("gradDate")} className={inputClasses} />
                </Field>
                <Field label="Cumulative GPA">
                  <input value={data.gpa} onChange={handleChange("gpa")} placeholder="e.g., 3.7 / 4.0" className={inputClasses} />
                </Field>
                <Field label="Faculty advisor">
                  <input value={data.advisor} onChange={handleChange("advisor")} className={inputClasses} />
                </Field>
              </div>
              <Field label="Relevant coursework completed">
                <textarea
                  value={data.coursework}
                  onChange={handleChange("coursework")}
                  placeholder="e.g., Human Anatomy, Radiologic Physics, Patient Care Fundamentals"
                  rows={3}
                  className={inputClasses + " resize-y"}
                />
              </Field>
            </div>
          </section>

          {/* 3. Preferences */}
          <section id="preferences" ref={setSectionRef("preferences")} className="scroll-mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="bg-blue-950 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/30 px-2 py-0.5 font-mono text-xs text-white">03</span>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Internship Preferences</h2>
              </div>
            </div>
            <div className="px-6 py-6">
              <label className="mb-2.5 block font-mono text-[11px] uppercase tracking-wide text-slate-500">
                Preferred rotation / modality<span className="ml-1 text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {MODALITIES.map((name) => {
                  const selected = modalities.includes(name);
                  return (
                    <button
                      type="button"
                      key={name}
                      onClick={() => toggleModality(name)}
                      className={
                        "rounded-md border px-2.5 py-3.5 text-center text-xs font-medium transition " +
                        (selected
                          ? "border-teal-600 bg-teal-50 text-blue-950 font-semibold ring-1 ring-teal-600"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300")
                      }
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 font-mono text-[11px] text-slate-400">SELECT UP TO 2 — IN ORDER OF PREFERENCE</p>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Field label="Preferred start date" required>
                  <input type="date" required value={data.startDate} onChange={handleChange("startDate")} className={inputClasses} />
                </Field>
                <Field label="Preferred end date" required>
                  <input type="date" required value={data.endDate} onChange={handleChange("endDate")} className={inputClasses} />
                </Field>
                <Field label="Hours available / week">
                  <input type="number" min="1" max="60" value={data.hours} onChange={handleChange("hours")} placeholder="e.g., 20" className={inputClasses} />
                </Field>
              </div>
            </div>
          </section>

          
{/* 4. Documents & Declaration */}
<section
  id="documents"
  ref={setSectionRef("documents")}
  className="scroll-mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white"
>
  <div className="bg-blue-950 px-6 py-4">
    <div className="flex items-center gap-3">
      <span className="rounded-full border border-white/30 px-2 py-0.5 font-mono text-xs text-white">
        04
      </span>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
        Documents & Declaration
      </h2>
    </div>
  </div>

  <div className="px-6 py-6">

    {/* Upload CV */}
    <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-slate-500">
      Upload Transcript / CV / Supporting Documents
    </label>

    <label className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-teal-600 hover:bg-teal-50">
      <input
        type="file"
        multiple
        onChange={handleFiles}
        className="hidden"
      />

      <UploadCloud className="mb-2 h-5 w-5 text-slate-400" />

      <span className="text-xs text-slate-500">
        Click to choose files, or drag them here — PDF, DOC, JPG up to 10MB each
      </span>
    </label>

    {files.length > 0 && (
      <ul className="mt-3 space-y-1">
        {files.map((name) => (
          <li
            key={name}
            className="flex items-center gap-2 text-xs font-semibold text-teal-700"
          >
            <FileText className="h-3.5 w-3.5" />
            {name}
          </li>
        ))}
      </ul>
    )}

    {/* Payment Screenshot */}
    <div className="mt-8">
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-slate-500">
        Upload Payment Screenshot
        <span className="ml-1 text-red-500">*</span>
      </label>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-teal-600 hover:bg-teal-50">
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          required
          className="hidden"
        />

        <UploadCloud className="mb-2 h-5 w-5 text-slate-400" />

        <span className="text-xs text-slate-500">
          Upload your payment screenshot (JPG, PNG, JPEG)
        </span>
      </label>
    </div>

    {/* Declaration */}
    <div className="mt-7 rounded-md border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-500">
      I certify that the information provided in this application is true and
      complete to the best of my knowledge. I understand that any false
      statement may result in rejection of my application or termination of my
      internship placement.
    </div>

    {/* Agree Checkbox */}
    <div className="mt-4 flex items-start gap-3">
      <input
        type="checkbox"
        id="agree"
        required
        checked={data.agree}
        onChange={handleChange("agree")}
        className="mt-1 h-4 w-4 flex-shrink-0 accent-teal-600"
      />

      <label htmlFor="agree" className="text-sm text-slate-800">
        I have read and agree to the declaration above
        <span className="ml-1 text-red-500">*</span>
      </label>
    </div>
  </div>
</section>

          {/* Submit bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-1 pt-2">
            <span className={"font-mono text-xs " + (showErrors ? "text-red-500" : submitted ? "text-teal-600" : "text-slate-500")}>
              {submitted
                ? "Submitted successfully."
                : showErrors
                ? "Please complete all required fields marked *."
                : "All required fields marked * must be completed before submission."}
            </span>
            <button
              type="submit"
              disabled={submitted}
              className="rounded-md bg-blue-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {submitted ? "Submitted" : "Submit Application"}
            </button>
          </div>

          {submitted && (
            <div className="flex items-center gap-2.5 rounded-md border border-teal-600 bg-teal-50 px-5 py-4 text-sm font-semibold text-blue-950">
              <CircleCheck className="h-4 w-4 text-teal-600" />
              Application received — check your email for a confirmation and reference number.
            </div>
          )}
        </form>
      </div>

      <footer className="border-t border-slate-200 px-6 py-6 text-center font-mono text-xs text-slate-400">
        G Care Diagnotic Cener · 153/1,F Block phase 5 D.H.A, Lahore, Pakistan
      </footer>
    </div>
  );
}
export default InternshipForm