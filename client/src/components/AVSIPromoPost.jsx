
import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  ArrowRight,
  Globe,
  Mail,
} from "lucide-react";

const services = [
  { icon: Code2, title: "WEB DEVELOPMENT", desc: "Websites & business apps" },
  { icon: Smartphone, title: "MOBILE APPS", desc: "Android & iOS solutions" },
  { icon: Cloud, title: "CLOUD SOLUTIONS", desc: "Deploy. Scale. Grow." },
  { icon: ShieldCheck, title: "IT SUPPORT", desc: "Reliable technical support" },
];

export default function AVSIPromoPost() {
  return (
    <article className="relative mx-auto aspect-square w-full max-w-[1080px] overflow-hidden bg-[#F7F7F4] font-sans text-[#232466]">
      {/* Decorative corner */}
      <div className="absolute right-0 top-0 h-3 w-[30%] bg-[#EF5622]" />

      <div className="relative z-10 flex h-full flex-col p-[5.5%]">
        {/* Brand header */}
        <header className="flex items-center gap-4">
          <div>
            <div className="text-4xl font-black leading-none tracking-[-0.07em] sm:text-6xl">
              <span className="text-[#EF5622]">A</span>VSI
            </div>
            <div className="mt-1 text-[8px] font-bold tracking-[0.36em] sm:text-xs">
              TECHNOLOGIES
            </div>
          </div>

          <div className="h-12 w-px bg-[#232466]/50" />

          <p className="text-xs leading-relaxed sm:text-base">
            Smart IT Solutions
            <br />
            for a Connected Future
          </p>
        </header>

        {/* Main editorial section */}
        <main className="relative mt-[7%] flex-1">
          <div className="relative z-10 w-full sm:w-[72%]">
            <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#EF5622] sm:text-sm">
              YOUR IDEAS&nbsp; + &nbsp;OUR TECHNOLOGY
            </p>

            <h1 className="text-[clamp(36px,7.3vw,78px)] leading-[0.94] font-black tracking-[-0.065em]">
              Build Powerful
              <span className="mt-1 block text-[#EF5622]">
                Digital Solutions
              </span>
            </h1>

            <p className="mt-4 max-w-[440px] text-xs leading-relaxed text-slate-600 sm:mt-6 sm:text-base">
              We create modern web and mobile applications
              that help businesses grow, automate processes
              and reach their goals faster.
            </p>
          </div>

          {/* Photographic visual */}
          <div className="absolute right-[-6%] top-[20%] h-[54%] w-[57%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
              alt="Developer workspace with laptop and code"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F4] via-transparent to-transparent" />
          </div>

          {/* Orange geometric accent */}
          <div className="absolute right-[5%] top-[7%] h-20 w-20 -rotate-12 border-r-[10px] border-t-[10px] border-[#EF5622] sm:h-32 sm:w-32" />

          {/* Services */}
          <div className="absolute bottom-0 left-0 z-10 grid w-full grid-cols-2 gap-x-5 gap-y-4 sm:w-[68%] sm:gap-x-8 sm:gap-y-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="border-t border-[#232466]/20 pt-3 sm:pt-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#EF5622] sm:h-5 sm:w-5" />
                  <h2 className="text-[9px] font-extrabold tracking-wide sm:text-xs">
                    {title}
                  </h2>
                </div>
                <p className="text-[9px] text-slate-600 sm:text-xs">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </main>

        {/* Strong dark footer */}
        <footer className="-mx-[5.8%] -mb-[5.8%] mt-6 bg-[#232466] px-[5.8%] py-5 text-white sm:mt-8 sm:py-7">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-[#EF5622] px-3 py-3 sm:px-6">
              <span className="text-xs font-extrabold sm:text-xl">
                LET'S BUILD TOGETHER
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 sm:h-6 sm:w-6" />
            </div>

            <div className="hidden text-right text-[10px] leading-relaxed text-white/70 sm:block">
              INNOVATE.
              <br />
              BUILD. GROW.
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-3 text-[9px] sm:text-xs">
            <span className="flex items-center gap-2">
              <Globe className="h-3 w-3 text-[#EF5622]" />
              www.avsitechnologies.in
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-[#EF5622]" />
              info@avsi.in
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
}
