import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, name: "Facebook", bgColor: "#1877F2", link: "https://www.facebook.com/profile.php?id=61590875490545&sk=about" },
    { icon: FaInstagram, name: "Instagram", bgColor: "#E4405F", link: "https://www.instagram.com/adroit_audial/" },
    { icon: FaLinkedinIn, name: "Linkedin", bgColor: "#0A66C2", link: "#" },
    { icon: FaYoutube, name: "Youtube", bgColor: "#FF0000", link: "https://www.youtube.com/@AdroitAudial" },
  ];


  return (
    <footer className="bg-[#0F172A] text-white">

      {/* CTA */}
      <div className="border-b border-white/10">

        <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">

          <div className="flex-1">

            <h2 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-bold
              leading-tight
            ">
              Transform Your Space With Professional Audio Solutions
            </h2>

            <p className="
              text-white/70
              mt-4
              sm:mt-5
              md:mt-6
              max-w-full
              sm:max-w-2xl
              md:max-w-3xl
              lg:max-w-4xl
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-[22px]
              leading-relaxed
            ">
              From microphones and studio gear to complete audio system
              installation and integration, we deliver solutions tailored
              to your requirements.
            </p>

          </div>

          <Link
            to="/contact"
            className="
              w-full
              sm:w-auto
              inline-flex
              justify-center
              bg-[#EF5622]
              hover:bg-[#d84c1d]
              px-6
              sm:px-8
              md:px-10
              py-3
              sm:py-4
              md:py-5
              rounded-full
              font-semibold
              text-sm
              sm:text-base
              md:text-lg
              transition-all
              duration-300
              whitespace-nowrap
            "
          >
            Request Consultation
          </Link>

        </div>

      </div>

      {/* Main Footer */}
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 xl:gap-16">

          {/* About */}
          <div className="lg:col-span-1">

            <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5">
              About US
            </h3>

            <p className="
              text-white/70
              leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
            ">
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

            <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5">
              Categories
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">

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

            <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">

              <li><Link className="hover:text-white" to="/">Home</Link></li>
              <li><Link className="hover:text-white" to="/about-us">About Us</Link></li>
              <li><Link className="hover:text-white" to="/brand">Brands</Link></li>
              <li><Link className="hover:text-white" to="/products">Products</Link></li>
              <li><Link className="hover:text-white" to="/services">Services</Link></li>
              <li><Link className="hover:text-white" to="/software">Software & Plugins</Link></li>
              <li><Link className="hover:text-white" to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5">
              Keep in Touch
            </h3>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl">

              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-white transition-all duration-300"
                >
                  <span>{social.name}</span>
                </a>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl">

              {/* Address */}
              <div className="flex items-start gap-3">

                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />

                <p className="text-white/60 leading-relaxed">
                  5B-267, Akshay Mittal Industrial Estate,
                  Marol Naka, Andheri East,
                  Mumbai, Maharashtra - 400059
                </p>

              </div>

              {/* Email */}
              <a
                href="mailto:info@adroitaudial.in"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={18} className="text-white flex-shrink-0" />
                <span className="text-white/60">info@adroitaudial.in</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919511609437"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={18} className="text-white flex-shrink-0" />
                <span className="text-white/60">+91 95116 09437</span>
              </a>

            </div>

          </div>

        </div>

        {/* SEO Text */}
        <div className="border-t border-white/10 mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">

          <p className="
            text-white/50
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            leading-relaxed
            max-w-full
            lg:max-w-5xl
          ">
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
      <div className="border-t border-white/10 py-4 sm:py-5 text-center text-xs sm:text-sm md:text-base text-white/50">
        © {new Date().getFullYear()} Adroit Audial LLP. All Rights Reserved.
      </div>

    </footer>
  );
}