import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      await axios.post("/api/contact", formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white flex items-center justify-center px-4 py-10 mt-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* LEFT SIDE - INFO */}
        <div className="bg-sky-500 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm opacity-90 mb-8">
            Have questions?
          </p>

          <div className="space-y-6 text-sm">
            <div className="flex items-center gap-4">
              <FaEnvelope />
              <span>info@avsi.in</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt />
              <span>+91 95116 09437</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt />
              <span>+91 77096 83131</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt />
              <span>C Wing, Flat No. 101, Chheda Complex, Near Panchmuskhi Hanuman Mandir, Nalasopara West</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a Message
          </h3>

          {success && (
            <div className="mb-5 p-3 text-green-700 rounded-lg text-sm text-center">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold bg-sky-500 text-white hover:opacity-90 cursor-pointer hover:scale-[1.02] transition duration-200 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;