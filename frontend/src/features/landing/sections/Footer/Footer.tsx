// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa"

// import { FaXTwitter } from "react-icons/fa6"

// import DollarLogo from "../../../../assets/dollerlogo.webp"

// const Footer = () => {
//   return (
//     <footer className="relative w-full overflow-hidden bg-[#06100f] text-white">

//       {/* ================= BACKGROUND ================= */}

//       {/* Huge faint Spenzee text */}
//       <div className="pointer-events-none absolute -bottom-8 left-5 select-none text-[150px] font-black leading-none tracking-[-0.08em] text-white/[0.040] md:text-[190px] lg:text-[230px]">
//         spenzee
//       </div>

//       {/* Subtle green glow */}
//       <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-900/20 blur-[120px]" />

//       <div className="pointer-events-none absolute -bottom-60 left-1/3 h-[400px] w-[500px] rounded-full bg-emerald-950/30 blur-[100px]" />


//       {/* ================= MAIN FOOTER ================= */}

//       <div className="relative z-10 mx-auto max-w-[1600px] px-8 py-12 md:px-12 md:py-14 lg:px-16">

//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_0.7fr_0.7fr_0.8fr_1fr]">


//           {/* ================= BRAND ================= */}

//           <div className="max-w-xs">

//             {/* Logo + Name */}
//             <div className="flex items-center gap-3">

//               <img
//                 src={DollarLogo}
//                 alt="Spenzee"
//                 className="h-10 w-10 rounded-full object-cover"
//               />

//               <span className="text-xl font-bold tracking-tight">
//                 Spenzee
//               </span>

//             </div>


//             {/* Tagline */}
//             <p className="mt-3 text-sm text-slate-400">
//               Built by Spenzee Team ⚡
//             </p>

//           </div>


//           {/* ================= PRODUCT ================= */}

//           <div>

//             <h3 className="text-sm font-semibold text-white">
//               Product
//             </h3>

//             <div className="mt-5 space-y-3">

//               <a
//                 href="#features"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Features
//               </a>

//               <a
//                 href="#how-it-works"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 How It Works
//               </a>

//               <a
//                 href="#pricing"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Pricing
//               </a>

//             </div>

//           </div>


//           {/* ================= COMPANY ================= */}

//           <div>

//             <h3 className="text-sm font-semibold text-white">
//               Company
//             </h3>

//             <div className="mt-5 space-y-3">

//               <a
//                 href="#about"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 About
//               </a>

//               <a
//                 href="#careers"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Careers
//               </a>

//               <a
//                 href="#blog"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Blog
//               </a>

//             </div>

//           </div>


//           {/* ================= RESOURCES ================= */}

//           <div>

//             <h3 className="text-sm font-semibold text-white">
//               Resources
//             </h3>

//             <div className="mt-5 space-y-3">

//               <a
//                 href="#help"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Help Center
//               </a>

//               <a
//                 href="#contact"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Contact
//               </a>

//               <a
//                 href="#docs"
//                 className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
//               >
//                 Docs
//               </a>

//             </div>

//           </div>


//           {/* ================= SOCIALS ================= */}

//           <div className="flex items-start lg:justify-end">

//             <div className="flex items-center gap-5">

//               <a
//                 href="#"
//                 aria-label="GitHub"
//                 className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
//               >
//                 <FaGithub size={18} />
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
//               >
//                 <FaLinkedinIn size={17} />
//               </a>

//               <a
//                 href="#"
//                 aria-label="X"
//                 className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
//               >
//                 <FaXTwitter size={17} />
//               </a>

//               <a
//                 href="#"
//                 aria-label="YouTube"
//                 className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
//               >
//                 <FaYoutube size={19} />
//               </a>

//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
//               >
//                 <FaInstagram size={18} />
//               </a>

//             </div>

//           </div>

//         </div>

//       </div>

//     </footer>
//   )
// }

// export default Footer










import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa"

import { FaXTwitter } from "react-icons/fa6"

import DollarLogo from "../../../../assets/dollerlogo.webp"

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#06100f] text-white">

      {/* ================= BACKGROUND ================= */}

      {/* Huge faint Spenzee text */}
      <div className="pointer-events-none absolute -bottom-[-35px] left-5 select-none text-[150px] font-black leading-none tracking-[-0.08em] text-white/[0.040] md:text-[190px] lg:text-[230px]">
        spenzee
      </div>

      {/* Right green glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-900/20 blur-[120px]" />

      {/* Bottom subtle glow */}
      <div className="pointer-events-none absolute -bottom-60 left-1/3 h-[400px] w-[500px] rounded-full bg-emerald-950/30 blur-[100px]" />


      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 py-12 md:px-12 md:py-14 lg:px-16">

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">


          {/* ================= BRAND ================= */}

          <div className="max-w-xs shrink-0">

            {/* Logo + Name */}
            <div className="flex items-center gap-3">

              <img
                src={DollarLogo}
                alt="Spenzee"
                className="h-10 w-10 rounded-full object-cover"
              />

              <span className="text-xl font-bold tracking-tight">
                Spenzee
              </span>

            </div>


            {/* Tagline */}
            <p className="mt-3 text-sm text-slate-400">
              Built by Spenzee Team
            </p>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16 lg:gap-20">


            {/* ================= PRODUCT ================= */}

            <div className="min-w-[110px]">

              <h3 className="text-sm font-semibold text-white">
                Product
              </h3>

              <div className="mt-5 space-y-3">

                <a
                  href="#features"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Features
                </a>

                <a
                  href="#how-it-works"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href="#pricing"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Pricing
                </a>

              </div>

            </div>


            {/* ================= COMPANY ================= */}

            <div className="min-w-[110px]">

              <h3 className="text-sm font-semibold text-white">
                Company
              </h3>

              <div className="mt-5 space-y-3">

                <a
                  href="#about"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  About
                </a>

                <a
                  href="#careers"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Careers
                </a>

                <a
                  href="#blog"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Blog
                </a>

              </div>

            </div>


            {/* ================= RESOURCES ================= */}

            <div className="min-w-[120px]">

              <h3 className="text-sm font-semibold text-white">
                Resources
              </h3>

              <div className="mt-5 space-y-3">

                <a
                  href="#help"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Help Center
                </a>

                <a
                  href="#contact"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="#docs"
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Docs
                </a>

              </div>

            </div>


            {/* ================= SOCIALS ================= */}

            <div className="flex items-start">

              <div className="flex items-center gap-5">

                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
                >
                  <FaLinkedinIn size={17} />
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
                >
                  <FaXTwitter size={17} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
                >
                  <FaYoutube size={19} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
                >
                  <FaInstagram size={18} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer