const Stats = () => {
    return (
        <section className="w-full">

            <div className="relative min-h-[330px] w-full overflow-hidden bg-[#001d17]">

                {/* ================= BACKGROUND GLOW ================= */}

                {/* Right green glow */}
                <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-emerald-500/25 blur-[100px]" />

                {/* Bottom-left circle */}
                <div className="pointer-events-none absolute -bottom-[220px] -left-[120px] h-[470px] w-[470px] rounded-full border border-emerald-500/25 bg-emerald-500/5" />

                {/* Bottom-right circle */}
                <div className="pointer-events-none absolute -bottom-[230px] -right-[130px] h-[500px] w-[500px] rounded-full border border-emerald-400/25 bg-emerald-500/5" />

                {/* Subtle bottom glow */}
                <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-900/20 blur-[80px]" />


                {/* ================= CONTENT ================= */}

                <div className="relative z-10 mx-auto flex min-h-[330px] max-w-[1500px] items-center px-8 py-12 md:px-12 lg:px-16">

                    {/* ================= LEFT CONTENT ================= */}

                    <div className="w-[36%] shrink-0 pr-10">

                        <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-4xl">
                            More Than Shopping
                            <br />
                            A Smarter Tomorrow
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-6 text-slate-300 md:text-base">
                            Spenzee is not just about buying products.
                            <br />
                            It&apos;s about helping you build a smarter, more
                            <br />
                            balanced financial life.
                        </p>

                    </div>


                    {/* ================= STATS ================= */}

                    <div className="grid flex-1 grid-cols-4">

                        {/* Active Users */}
                        <div className="flex min-h-[120px] flex-col items-center justify-center border-l border-emerald-400/50 px-5 text-center">

                            <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                10K+
                            </h3>

                            <p className="mt-3 text-sm font-medium text-slate-300 md:text-base">
                                Active Users
                            </p>

                        </div>


                        {/* Trusted Providers */}
                        <div className="flex min-h-[120px] flex-col items-center justify-center border-l border-emerald-400/50 px-5 text-center">

                            <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                500+
                            </h3>

                            <p className="mt-3 text-sm font-medium text-slate-300 md:text-base">
                                Trusted Providers
                            </p>

                        </div>


                        {/* Products */}
                        <div className="flex min-h-[120px] flex-col items-center justify-center border-l border-emerald-400/50 px-5 text-center">

                            <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                1M+
                            </h3>

                            <p className="mt-3 text-sm font-medium text-slate-300 md:text-base">
                                Products
                            </p>

                        </div>


                        {/* Satisfaction */}
                        <div className="flex min-h-[120px] flex-col items-center justify-center border-l border-emerald-400/50 px-5 text-center">

                            <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                98%
                            </h3>

                            <p className="mt-3 text-sm font-medium text-slate-300 md:text-base">
                                User Satisfaction
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Stats



// const Stats = () => {
//   return (
//     <section className="w-full bg-[#002d24] px-6 py-12 md:px-10 lg:px-16">
//       <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

//         {/* Left Content */}
//         <div className="max-w-md shrink-0">
//           <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
//             More Than Shopping
//             <br />
//             A Smarter Tomorrow
//           </h2>

//           <p className="mt-5 max-w-sm text-sm leading-6 text-white/65 md:text-base">
//             Spenzee is not just about buying products.
//             It's about helping you build a smarter, more
//             balanced financial life.
//           </p>
//         </div>


//         {/* Statistics */}
//         <div className="grid flex-1 grid-cols-2 lg:grid-cols-4">

//           {/* Active Users */}
//           <div className="px-5 py-2 text-center lg:border-l lg:border-white/15">
//             <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
//               10K+
//             </h3>

//             <p className="mt-2 text-sm text-white/60 md:text-base">
//               Active Users
//             </p>
//           </div>


//           {/* Trusted Providers */}
//           <div className="px-5 py-2 text-center lg:border-l lg:border-white/15">
//             <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
//               500+
//             </h3>

//             <p className="mt-2 text-sm text-white/60 md:text-base">
//               Trusted Providers
//             </p>
//           </div>


//           {/* Products */}
//           <div className="px-5 py-2 text-center lg:border-l lg:border-white/15">
//             <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
//               1M+
//             </h3>

//             <p className="mt-2 text-sm text-white/60 md:text-base">
//               Products
//             </p>
//           </div>


//           {/* Satisfaction */}
//           <div className="px-5 py-2 text-center lg:border-l lg:border-white/15">
//             <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
//               98%
//             </h3>

//             <p className="mt-2 text-sm text-white/60 md:text-base">
//               User Satisfaction
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Stats