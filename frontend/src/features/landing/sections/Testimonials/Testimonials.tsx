import { useState } from "react"

import AjmalImage from "../../../../assets/Ajmal.jpeg"
import ThanveeraImage from "../../../../assets/Thanveera.jpeg"
import CristianoImage from "../../../../assets/CristianoRonaldo.jpeg"

const testimonials = [
  {
    quote:
      "Spenzee helped me understand my spending and suggested products I actually needed. Incredible experience!",
    name: "Ajmal PK.",
    role: "Spenzee User",
    image: AjmalImage,
  },
  {
    quote:
      "As a provider, I've reached the right customers and grown my business significantly.",
    name: "Thanveera.",
    role: "Business Provider",
    image: ThanveeraImage,
  },
  {
    quote:
      "A perfect blend of finance and shopping. Finally, a platform that actually makes sense.",
    name: "CR7.",
    role: "Spenzee User",
    image: CristianoImage,
  },
]

const Testimonials = () => {
  const [hoveredUser, setHoveredUser] = useState<string | null>(null)

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f0faf4] via-[#fafaf7] to-[#fff8ed] py-16 md:py-20 lg:py-24">

      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Top-left soft circle */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full border border-emerald-100 bg-emerald-100/30 blur-[1px]" />

      {/* Bottom-right soft circle */}
      <div className="pointer-events-none absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full border border-emerald-100 bg-emerald-100/20" />

      {/* Small cream glow */}
      <div className="pointer-events-none absolute right-[20%] top-[15%] h-[300px] w-[300px] rounded-full bg-amber-100/20 blur-[90px]" />


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 md:px-12 lg:px-16">

        {/* ================= HEADER ================= */}

        <div className="flex items-end justify-between">

          <div>

            {/* Small label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-sm">
              <span className="text-sm">👥</span>
              REAL PEOPLE. REAL IMPACT.
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-[46px]">
              What Our{" "}
              <span className="text-emerald-800">
                Users Say
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
              Real stories from people who are spending smarter with Spenzee.
            </p>

          </div>


          {/* View All */}
          <button
            type="button"
            className="group hidden items-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-emerald-800 md:flex"
          >
            View All Testimonials

            <span className="ml-2 text-lg transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>


        {/* ================= TESTIMONIAL CARDS ================= */}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <div
              key={testimonial.name}
              className={`group relative flex min-h-[280px] flex-col justify-between overflow-visible rounded-2xl border bg-white/90 px-7 py-7 shadow-[0_12px_40px_rgba(0,60,45,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,60,45,0.12)] ${
                index === 0
                  ? "border-emerald-300"
                  : "border-emerald-100"
              }`}
            >

              {/* ================= QUOTE ICON ================= */}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-3xl font-bold leading-none text-emerald-600">
                “
              </div>


              {/* ================= QUOTE ================= */}

              <p className="max-w-xl text-base font-medium leading-7 text-slate-600 md:text-[17px]">
                &quot;{testimonial.quote}&quot;
              </p>


              {/* ================= USER INFO ================= */}

              <div className="mt-8 flex items-end justify-between">

                {/* Profile */}
                <div className="relative">

                  <div
                    className="flex cursor-pointer items-center gap-3"
                    onMouseEnter={() =>
                      setHoveredUser(testimonial.name)
                    }
                    onMouseLeave={() =>
                      setHoveredUser(null)
                    }
                  >

                    {/* Avatar */}
                    <div className="relative">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border-2 border-emerald-200 object-cover shadow-sm transition-all duration-300 group-hover:border-emerald-400"
                      />

                      {/* Green ring */}
                      <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent transition-all duration-300 group-hover:ring-emerald-100" />

                    </div>


                    {/* Name + Role */}
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {testimonial.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>


                  {/* ================= PROFILE HOVER POPUP ================= */}

                  {hoveredUser === testimonial.name && (
                    <div
                      className="absolute bottom-[68px] left-0 z-50 animate-[bubbleIn_0.2s_ease-out]"
                      onMouseEnter={() =>
                        setHoveredUser(testimonial.name)
                      }
                      onMouseLeave={() =>
                        setHoveredUser(null)
                      }
                    >

                      <div className="relative rounded-2xl border border-emerald-100 bg-white p-3 shadow-[0_15px_45px_rgba(0,60,45,0.18)]">

                        {/* Large Profile */}
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-32 w-32 rounded-xl object-cover"
                        />

                        {/* Profile details */}
                        <div className="mt-2 px-1">
                          <p className="text-sm font-bold text-slate-900">
                            {testimonial.name}
                          </p>

                          <p className="text-xs text-slate-500">
                            {testimonial.role}
                          </p>
                        </div>


                        {/* Bubble Arrow */}
                        <div className="absolute -bottom-2 left-7 h-4 w-4 rotate-45 border-b border-r border-emerald-100 bg-white" />

                      </div>

                    </div>
                  )}

                </div>


                {/* ================= STARS ================= */}

                <div className="flex items-center gap-0.5 pb-1 text-[18px] leading-none text-amber-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= MOBILE VIEW ALL ================= */}

        <button
          type="button"
          className="group mt-7 flex items-center text-sm font-semibold text-slate-700 md:hidden"
        >
          View All Testimonials

          <span className="ml-2 text-lg transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>


      {/* ================= BUBBLE ANIMATION ================= */}

      <style>{`
        @keyframes bubbleIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.85);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

    </section>
  )
}

export default Testimonials