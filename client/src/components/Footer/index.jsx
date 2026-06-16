import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, name: "Facebook", bgColor: "#1877F2", link: "https://www.facebook.com/profile.php?id=61590875490545&sk=about" },
    { icon: FaInstagram, name: "Instagram", bgColor: "#E4405F", link: "#" },
    { icon: FaLinkedinIn, name: "Linkedin", bgColor: "#0A66C2", link: "#" },
    { icon: FaYoutube, name: "Youtube", bgColor: "#FF0000", link: "https://www.youtube.com/@AdroitAudial" },
  ];


  return (
    <footer className="bg-[#0F172A] text-white">

      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Transform Your Space With Professional Audio Solutions
            </h2>

            <p className="text-white/70 mt-4 max-w-2xl">
              From microphones and studio gear to complete audio system
              installation and integration, we deliver solutions tailored
              to your requirements.
            </p>
          </div>
          
          <Link
            to="/contact"
            className="bg-[#EF5622] hover:bg-[#d84c1d] px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Request Consultation
          </Link>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

          {/* About */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              About US
            </h3>

            <p className="text-white/70 leading-relaxed">
            Adroit Audial LLP specializes in professional audio solutions,
            supplying world-class microphones, audio interfaces, monitor
            speakers, headphones, mixers, software, and studio accessories.
            We also provide complete audio system design, installation,
            integration, commissioning, and technical support for recording
            studios, podcast setups, educational institutions, houses of
            worship, corporate facilities, auditoriums, and entertainment venues.
          </p>

          </div>

          {/* Categories */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link className="hover:text-white" to="/category/microphone">Microphones</Link></li>
              <li><Link className="hover:text-white" to="/category/audio-interfaces">Audio Interfaces</Link></li>
              <li><Link className="hover:text-white" to="/category/monitor-speakers">Monitor Speakers</Link></li>
              <li><Link className="hover:text-white" to="/category/monitor-speaker-bundle">Monitor Speakers Bundle</Link></li>
              <li><Link className="hover:text-white" to="/category/mixers">Mixers</Link></li>
              <li><Link className="hover:text-white" to="/category/studio-headphones">Studio Headphones</Link></li>
              <li><Link className="hover:text-white" to="/category/pre-amps">Pre Amps</Link></li>
              <li><Link className="hover:text-white" to="/category/sound-proofing">Sound Proofing</Link></li>
              <li><Link className="hover:text-white" to="/category/groove-production">Groove Production</Link></li>
              <li><Link className="hover:text-white" to="/category/studio-accessories">Studio Accessories</Link></li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link className="hover:text-white" to="/">Home</Link></li>
              <li><Link className="hover:text-white" to="/about">About Us</Link></li>
              <li><Link className="hover:text-white" to="/brands">Brands</Link></li>
              <li><Link className="hover:text-white" to="/products">Products</Link></li>
              <li><Link className="hover:text-white" to="/products">Services</Link></li>
              <li><Link className="hover:text-white" to="/products">Software & Plugins</Link></li>
              <li><Link className="hover:text-white" to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Keep in Touch */}
          <div>

          <h3 className="font-semibold text-lg mb-5">
            Keep in Touch
          </h3>

          <div className="space-y-3">

            {socialLinks.map((social, i) => {
              const Icon = social.icon;

              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-none text-white/70 hover:text-white transition-all duration-300 group"
                >
                  {/* <div className="w-10 h-9 flex items-center justify-start">
                    <Icon size={18} />
                  </div> */}

                  <span className="font-medium justify-start">
                    {social.name}
                  </span>
                </a>
              );
            })}

          </div>

        </div>

          {/* Contact */}
  <div>

    <h3 className="font-semibold text-lg mb-5">
      Contact Us
    </h3>

    <div className="space-y-4">
      {/* Address */}
      <div className="flex items-start gap-3">

      <MapPin
        size={18}
        className="text-[#fff] mt-1 flex-shrink-0"
      />

      <p className="text-white/60 text-sm leading-6">
        5B-267, Akshay Mittal Industrial Estate,
        Marol Naka, Andheri East,
        Mumbai, Maharashtra - 400059
      </p>

    </div>

    {/* Email */}
    <a
      href="mailto:info@adroitaudial.in"
      className="flex items-center gap-3 mt-4 hover:text-white transition-colors"
    >

      <Mail
        size={18}
        className="text-[#fff] flex-shrink-0"
      />

      <span className="text-white/60 text-sm">
        info@adroitaudial.in
      </span>

    </a>

    {/* Phone */}
    <a
      href="tel:+919511609437"
      className="flex items-center gap-3 mt-4 hover:text-white transition-colors"
    >

      <Phone
        size={18}
        className="text-[#fff] flex-shrink-0"
      />

      <span className="text-white/60 text-sm">
        +91 95116 09437
      </span>

    </a>
  </div>

  

</div>

        </div>

        {/* SEO Text */}
        <div className="border-t border-white/10 mt-12 pt-8">

          <p className="text-white/50 text-sm leading-relaxed max-w-5xl">
          Adroit Audial LLP is a trusted provider of professional audio
          equipment and installation services across India. We supply
          microphones, audio interfaces, monitor speakers, studio
          headphones, mixers, software plugins, acoustic treatment
          products, and recording accessories while delivering complete
          audio system design, integration, installation, commissioning,
          and support services for recording studios, podcast studios,
          educational institutions, auditoriums, conference rooms,
          houses of worship, and commercial facilities.
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Adroit Audial LLP. All Rights Reserved.
      </div>

    </footer>
  );
}