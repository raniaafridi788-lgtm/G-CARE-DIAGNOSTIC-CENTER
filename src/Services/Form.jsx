import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { servicesDetail } from "./ServicesDetail";
import logo from "../assets/logo.png"
import {
  CalendarDays,
  User,
  Mail,
  Phone,
  Stethoscope,
  Baby,
  Radiation,
  Scan,
  Zap,
  Waves,
  Syringe,
  Atom,
  Activity,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
    HeartPulse,
 
} from "lucide-react";


const LOGO_SRC = logo;

const DAYS = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

const DEPARTMENTS = [
  { label: "Diagnostic Imaging", icon: Scan },
  { label: "Mammography", icon: Activity },
  { label: "Pediatric Radiology", icon: Baby },
  { label: "Emergency & Trauma Imaging", icon: AlertTriangle },
  { label: "General Radiology", icon: Stethoscope },
];

const TESTS = [
  { label: "MRI", icon: Scan, note: "Magnetic resonance imaging" },
  { label: "X-Ray", icon: Zap, note: "Standard radiograph" },
  { label: "CT Scan", icon: Radiation, note: "Computed tomography" },
  { label: "Ultrasound", icon: Waves, note: "Sonography" },
    { label: "Echocardiography", icon: HeartPulse, note: "Ultrasound imaging of the heart" },
  { label: "Mammography", icon: Activity, note: "Breast X-ray imaging for screening" },
];

function SectionLabel({ children }) {
  return (
    <div className="relative inline-block mb-5">
      <div className="absolute inset-0 translate-x-1 translate-y-1 border-2 border-[#1B3A6B]/25 rounded-sm" />
      <div className="relative border-2 border-[#1B3A6B] bg-white px-4 py-1.5 rounded-sm">
        <span className="text-[#1B3A6B] font-semibold tracking-wide text-sm uppercase">
          {children}
        </span>
      </div>
    </div>
  );
}

function Logo({ size = 56 }) {
  if (!LOGO_SRC) {
    return (
      <div
        className="shrink-0 border-[#1B3A6B]/40 bg-[#EAF2FB] flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span className="text-[9px] text-[#1B3A6B]/60 font-medium tracking-wide">
          LOGO
        </span>
      </div>
    );
  }
  return (
  

    <img
      src={LOGO_SRC}
      alt="G.Care Diagnostic Center Logo"
      className="w-full h-full object-cover"
    />
  );
}


export default function PatientAppointmentForm() {
    const [searchParams] = useSearchParams();
const serviceSlug = searchParams.get("service");
const service = servicesDetail[serviceSlug];

  const [day, setDay] = useState(null);
  const [dept, setDept] = useState(null);
  const [tests, setTests] = useState([]);
  const [contactPref, setContactPref] = useState("email");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
  });

  const toggleTest = (label) => {
    setTests((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
  };

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{
          background:
            "repeating-linear-gradient(#F7F5F0, #F7F5F0 27px, #E7E2D6 28px), linear-gradient(#F7F5F0, #F7F5F0)",
        }}
      >
        <div className="bg-white rounded-sm shadow-xl border border-[#1B3A6B]/15 px-10 py-12 max-w-md w-full text-center">
          <CheckCircle2 className="mx-auto mb-4 text-[#1B3A6B]" size={48} strokeWidth={1.5} />
          <h2 className="text-xl font-semibold text-[#1B3A6B] mb-2">
            Appointment Requested
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Thanks{form.firstName ? `, ${form.firstName}` : ""}. G.Care Diagnostic Center
            will confirm your {dept ? dept.toLowerCase() : "appointment"} slot by{" "}
            {contactPref === "email" ? "email" : "phone"} shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm font-medium text-[#1B3A6B] underline underline-offset-4"
          >
            Edit request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{
        background:
          "repeating-linear-gradient(#F7F5F0, #F7F5F0 27px, #E7E2D6 28px), linear-gradient(#F7F5F0, #F7F5F0)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-sm shadow-xl border border-[#1B3A6B]/10 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#1B3A6B] px-8 pt-6 pb-5 relative">
          <div className="h-1 w-full bg-gradient-to-r from-[#D9A441] via-[#4A7BAE] to-[#D9A441] absolute top-0 left-0" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white">
            <Logo />
          </div>
              <div>
                <p className="text-white font-semibold leading-tight">
                  G.Care Diagnostic Center
                </p>
                <p className="text-[#9CB6D8] text-xs italic">
                  We are here to serve humanity
                </p>
              </div>
            </div>
            <div className="text-right">
              <label className="text-[#9CB6D8] text-[11px] uppercase tracking-wide block mb-1">
                Date
              </label>
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/25 rounded-sm px-2 py-1">
                <CalendarDays size={14} className="text-[#9CB6D8]" />
                <input
                  type="date"
                  value={form.date}
                  onChange={handleChange("date")}
                  className="bg-transparent text-white text-xs outline-none placeholder-white/50 [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          <h1 className="text-white text-2xl font-semibold tracking-tight">
            Patient Appointment Form
          </h1>
          {service && (
  <p className="text-[#9CB6D8] text-sm mt-2">
    Selected Service: <span className="font-semibold">{service.title}</span>
  </p>
)}

          {/* Day strip */}
          <div className="flex gap-2 mt-4">
            {DAYS.map((d, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setDay(i)}
                className={`w-8 h-8 rounded-full text-xs font-medium border transition ${
                  day === i
                    ? "bg-[#D9A441] border-[#D9A441] text-[#1B3A6B]"
                    : "border-white/30 text-white/70 hover:border-white/60"
                }`}
              >
                {d}
              </button>
            ))}
            <span className="text-[#9CB6D8] text-[11px] self-center ml-2">
              preferred day of week
            </span>
          </div>
        </div>

        <div className="px-8 py-8 space-y-9">
          {/* Personal Information */}
          <section>
            <SectionLabel>Personal Information</SectionLabel>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
        <label className="text-xs text-slate-500 mb-1 block">
             First name <span className="text-red-500">*</span>
         </label>
                <div className="flex items-center border border-slate-300 rounded-sm px-3 py-2 focus-within:border-[#1B3A6B]">
                  <User size={15} className="text-slate-400 mr-2" />
                  <input
                    required
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    className="w-full text-sm outline-none"
                    placeholder="Ahmed"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="text-xs text-slate-500 mb-1 block">Last name</label>
                <div className="flex items-center border border-slate-300 rounded-sm px-3 py-2 focus-within:border-[#1B3A6B]">
                  <input
                    required
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    className="w-full text-sm outline-none"
                    placeholder="Shah"
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="text-xs text-slate-500 mb-1 block">
               Email address <span className="text-red-500">*</span>
              </label>
                <div className="flex items-center border border-slate-300 rounded-sm px-3 py-2 focus-within:border-[#1B3A6B]">
                  <Mail size={15} className="text-slate-400 mr-2" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full text-sm outline-none"
                    placeholder="Ahmed@example.com"
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-xs text-slate-500 mb-1 block">
                 Phone number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-slate-300 rounded-sm px-3 py-2 focus-within:border-[#1B3A6B]">
                  <Phone size={15} className="text-slate-400 mr-2" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full text-sm outline-none"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-xs text-slate-500 mb-2 block">
                  Contact preference
                </label>
                <div className="flex gap-4">
                  {["email", "phone"].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="contactPref"
                        checked={contactPref === opt}
                        onChange={() => setContactPref(opt)}
                        className="accent-[#1B3A6B]"
                      />
                      Via {opt === "email" ? "Email" : "Phone"}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Appointment Department */}
          <section>
            <SectionLabel>Appointment Department</SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {DEPARTMENTS.map(({ label, icon: Icon }) => {
                const active = dept === label;
                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => setDept(label)}
                    className={`flex items-center gap-2 text-left px-3 py-2.5 rounded-sm border text-xs font-medium transition ${
                      active
                        ? "border-[#1B3A6B] bg-[#EAF2FB] text-[#1B3A6B]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <Icon size={15} className={active ? "text-[#1B3A6B]" : "text-slate-400"} />
                    {label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Test Requested */}
          <section>
            <SectionLabel>Test Requested</SectionLabel>
            <div className="grid grid-cols-2 gap-2.5">
              {TESTS.map(({ label, icon: Icon, note }) => {
                const active = tests.includes(label);
                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => toggleTest(label)}
                    className={`flex items-start gap-2.5 text-left px-3.5 py-3 rounded-sm border transition ${
                      active
                        ? "border-[#1B3A6B] bg-[#EAF2FB]"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon
                      size={17}
                      className={`mt-0.5 ${active ? "text-[#1B3A6B]" : "text-slate-400"}`}
                    />
                    <span>
                      <span
                        className={`block text-sm font-medium ${
                          active ? "text-[#1B3A6B]" : "text-slate-700"
                        }`}
                      >
                        {label}
                      </span>
                      <span className="block text-[11px] text-slate-400">{note}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <div>
            <label className="text-xs text-slate-500 mb-1 block">
              Notes for the technician (optional)
            </label>
            <textarea
              value={form.notes}
              onChange={handleChange("notes")}
              rows={3}
              className="w-full border border-slate-300 rounded-sm px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] resize-none"
              placeholder="Any symptoms, referring physician, or scheduling notes..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1B3A6B] hover:bg-[#152F57] text-white font-medium text-sm py-3 rounded-sm transition"
          >
            Schedule Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
