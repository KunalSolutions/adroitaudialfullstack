import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, bgColor: "#1877F2", link: "https://www.facebook.com/AVSITechnologies" },
    { icon: FaInstagram, bgColor: "#E4405F", link: "https://www.instagram.com/avsitechnologies/" },
    { icon: FaLinkedinIn, bgColor: "#0A66C2", link: "https://in.linkedin.com/company/avsitechnologies" },
    { icon: FaYoutube, bgColor: "#FF0000", link: "https://www.youtube.com/channel/UCoxw1_ttEGxRaCY0HxoLLlg" },
  ];

  const solutions = [
    { name: "Audio Solutions", link: "/solutions/audio-solutions" },
    { name: "Visual Solutions", link: "/solutions/visual-solutions" },
    { name: "Video Conferencing", link: "/solutions/video-conferencing" },
    { name: "Projection Systems", link: "/solutions/projection-systems" },
    { name: "Corporate Solutions", link: "/solutions/corporate-solutions" },
    // { name: "Retail & Hospitality", link: "/solutions/retail-hospitality" },
    // { name: "AI Technology", link: "/solutions/ai-technology" },
    // { name: "Boardroom Solutions", link: "/solutions/boardroom" },
    // { name: "Home Cinema", link: "/solutions/home-cinema" },
  ];

   const services = [
    { name: "Audio Visual", link: "/services/audio-video-system" },
    { name: "Information Technology", link: "/services/information-technology" },
    { name: "Surviallance & Security", link: "/services/surveillance-system" },
    { name: "Interior Desgin", link: "/services/interior-design" },
    { name: "Electrical", link: "/services/electrical-system" },
    { name: "Digital Marketing", link: "/services/digital-marketing" },
   ]

  return (
    <footer className="bg-[#232466] text-white">

      {/* Main Footer */}


      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Adroit Audial LLP. All Rights Reserved.
      </div>

    </footer>
  );
}