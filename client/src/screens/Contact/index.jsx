import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);

  try {
    await emailjs.send(
      "service_vnk3g6y", // Service ID
      "template_engvy9h", // Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message ,
      },
      "t9NymGoRAINsgl4bY"
    );

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }

  setLoading(false);
}; 

  return (
    <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 bg-white shadow-xl overflow-hidden">

          {/* LEFT SIDE */}
          <div className="bg-[#232466] text-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">

            <span className="text-[#EF5622] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Let's Discuss Your Audio Requirements
            </h2>

            <p className="text-slate-300 leading-relaxed mb-10">
              Whether you're planning an auditorium, conference room,
              classroom, public address system, background music setup,
              or professional audio installation, our team is ready to
              help you find the right solution.
            </p>

            <div className="space-y-7">

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#EF5622] mt-1 text-lg" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-300">
                    info@adroitaudial.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#EF5622] mt-1 text-lg" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-slate-300">
                    +91 77096 83131
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#EF5622] mt-1 text-lg" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-300">
                    5B-267, Akshay Mittal Industrial Estate, Marol Naka, Andheri East, Mumbai, Maharashtra - 400059
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-10 lg:p-12 bg-white">

            <h3 className="text-3xl font-bold mb-3 text-[#232466]">
              Send Us a Message
            </h3>

            <p className="text-slate-600 mb-8">
              Fill out the form below and our team will get back to you
              as soon as possible.
            </p>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm text-center">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EF5622] focus:border-[#EF5622] transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EF5622] focus:border-[#EF5622] transition"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EF5622] focus:border-[#EF5622] transition"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EF5622] focus:border-[#EF5622] transition"
                />

              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project, audio requirements, products, installation, support, or any specific enquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EF5622] focus:border-[#EF5622] transition mt-5"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-semibold bg-[#EF5622] text-white hover:bg-[#d94a1b] cursor-pointer transition-all duration-300 disabled:opacity-60 mt-5"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;