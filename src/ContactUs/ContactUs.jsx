import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactUs() {
    const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Appointment request:", form);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          Contact Us
        </h1>
        <p className="mt-4 text-slate-500 text-lg">
          Have questions or need an appointment? Our team is here to help.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug uppercase">
           g care diagnostic center
          </h2>
          <p className="mt-4 text-slate-500">
            We provide minimally invasive image-guided procedures with a
            patient-first approach. Book a visit for expert evaluation and
            care.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-5">
              <h3 className="text-blue-700 font-semibold mb-2">Address</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                153/1, F Block Phase 5 D.H.A,
                <br />
                Lahore Pakistan
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5">
              <h3 className="text-blue-700 font-semibold mb-2">Phone</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                +92-3221234567
                <br />
                +92-3211234567
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 sm:col-span-2">
              <h3 className="text-blue-700 font-semibold mb-2">Email</h3>
              <p className="text-slate-700 text-sm">info@gcare.com</p>
            </div>
          </div>
        </div>

        {/* Right column - form */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
          <div className="mb-5">
            <label className="block text-slate-900 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-200/70 border border-transparent px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              placeholder="Your name"
            />
          </div>

          <div className="mb-5">
            <label className="block text-slate-900 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-200/70 border border-transparent px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              placeholder="Your phone number"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-900 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-lg bg-slate-200/70 border border-transparent px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"
              placeholder="How can we help?"
            />
          </div>

         <button
  onClick={() => navigate("/book")}
  className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition"
>
  Book Appointment
</button>
        </div>
      </div>
    </div>
  );
}


export default ContactUs