import financeShoppingImage from "../../../../assets/wherefinancemeet.png"

const FinanceShopping = () => {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#fafaf8] py-16 md:py-20 lg:py-24"
    >
      <div
        className="mx-auto flex min-h-[560px] max-w-[1400px] items-center rounded-3xl bg-cover bg-center bg-no-repeat px-6 md:px-10 lg:px-14"
        style={{
          backgroundImage: `url(${financeShoppingImage})`,
        }}
      >

        {/* LEFT CONTENT OVER THE IMAGE */}
        <div className="relative z-10 max-w-[450px]">

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-[52px]">
            Where{" "}
            <span className="text-emerald-800">
              Finance
            </span>
            <br />
            Meets{" "}
            <span className="text-emerald-800">
              Shopping
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[450px] text-base leading-7 text-slate-600 md:text-lg">
            Your spending tells a story. Spenzee listens,
            understands, and helps you make better choices
            by connecting your finances with personalized
            product recommendations.
          </p>

          {/* Features */}
          <div className="mt-7 space-y-4">

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">
                ✓
              </div>

              <p className="text-sm font-medium text-slate-700 md:text-base">
                Track & analyze your expenses
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">
                ✓
              </div>

              <p className="text-sm font-medium text-slate-700 md:text-base">
                Get personalized product suggestions
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">
                ✓
              </div>

              <p className="text-sm font-medium text-slate-700 md:text-base">
                Shop from trusted providers
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">
                ✓
              </div>

              <p className="text-sm font-medium text-slate-700 md:text-base">
                Achieve your financial goals
              </p>
            </div>

          </div>

          {/* CTA */}
          <button
            type="button"
            className="group mt-8 inline-flex items-center rounded-xl bg-emerald-950 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-md"
          >
            See How It Works

            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

      </div>
    </section>
  )
}

export default FinanceShopping