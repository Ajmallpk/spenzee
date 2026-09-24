import { useNavigate } from "react-router-dom"
import heroImage from "../../../../assets/hero-2.png"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="relative w-full overflow-hidden">

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Spenzee smart spending"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Left Side Content */}
      <div className="relative z-10 flex min-h-[700px] items-start px-12 pt-36">
        <div className="max-w-[520px]">

          {/* Small Badge */}
          <div className="mb-5 inline-flex rounded-full bg-[#e9ebe7] px-4 py-2">
            <p className="text-[11px] font-semibold tracking-wide text-slate-600">
              SPEND SMART • SHOP BETTER • LIVE BRIGHTER
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 lg:text-6xl">
            Your Spending
            <br />
            Our Intelligence
            <br />
            <span className="text-emerald-800">
              A Better You
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[470px] text-base leading-7 text-slate-600">
            Spenzee analyzes your spending, gives personalized insights,
            and suggests the right products for a smarter, more meaningful
            life.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex items-center gap-4">

            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="rounded-lg bg-emerald-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-900 cursor-pointer"
            >
              Get Started
              <span className="ml-2">→</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-800 text-[10px] text-white">
                ▶
              </span>

              Watch Video
            </button>

          </div>

          {/* Social Proof */}
          <div className="mt-7 flex items-center gap-3">

            <div className="flex -space-x-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#d6b89c] text-xs">
                👨🏻
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#c99b7a] text-xs">
                👩🏻
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#b77d5d] text-xs">
                👩🏽
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#8d634d] text-xs">
                👩🏻
              </div>

            </div>

            <p className="text-sm font-medium text-slate-700">
              Join thousands who spend smarter
            </p>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero