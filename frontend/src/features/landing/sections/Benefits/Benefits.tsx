const Benefits = () => {
    return (
        <section className="w-full border-y border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {/* AI-Powered Insights */}
                <div className="group flex items-start gap-4 px-8 py-7 transition-colors duration-200 hover:bg-emerald-50/40 lg:border-r lg:border-slate-200">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-200 group-hover:border-emerald-700 group-hover:bg-emerald-50 group-hover:text-emerald-800">

                        {/* Settings Icon */}
                        <svg
                            className="icon-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                            <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.5 1.5-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.12v-.4a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.5-1.5.06-.06A1.7 1.7 0 0 0 9.14 15a1.7 1.7 0 0 0-1.56-1.03H7.2v-2.12h.38A1.7 1.7 0 0 0 9.14 10.8a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.5-1.5.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.56V5.8h2.12v.4a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.5 1.5-.06.06A1.7 1.7 0 0 0 19.4 10.8a1.7 1.7 0 0 0 1.56 1.03h.44v2.12h-.44A1.7 1.7 0 0 0 19.4 15Z" />
                        </svg>

                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-950">
                            AI-Powered Insights
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-500">
                            Understand your
                            <br />
                            spending habits
                        </p>
                    </div>
                </div>


                {/* Personalized Shopping */}
                <div className="group flex items-start gap-4 px-8 py-7 transition-colors duration-200 hover:bg-emerald-50/40 lg:border-r lg:border-slate-200">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-200 group-hover:border-emerald-700 group-hover:bg-emerald-50 group-hover:text-emerald-800">

                        {/* Shopping Bag Icon */}
                        <svg
                            className="icon-shake"
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 8h12l1 12H5L6 8Z" />
                            <path d="M9 8a3 3 0 0 1 6 0" />
                            <path d="M9 12v1" />
                            <path d="M15 12v1" />
                        </svg>

                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-950">
                            Personalized Shopping
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-500">
                            Product suggestions
                            <br />
                            just for you
                        </p>
                    </div>
                </div>


                {/* Secure & Private */}
                <div className="group flex items-start gap-4 px-8 py-7 transition-colors duration-200 hover:bg-emerald-50/40 lg:border-r lg:border-slate-200">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-200 group-hover:border-emerald-700 group-hover:bg-emerald-50 group-hover:text-emerald-800">

                        {/* Lock Icon */}
                        <svg
                            className="icon-lock"
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect
                                x="5"
                                y="10"
                                width="14"
                                height="10"
                                rx="2"
                            />
                            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                            <path d="M12 14v2" />
                        </svg>

                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-950">
                            Secure & Private
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-500">
                            Your data stays
                            <br />
                            protected
                        </p>
                    </div>
                </div>


                {/* All in One Place */}
                <div className="group flex items-start gap-4 px-8 py-7 transition-colors duration-200 hover:bg-emerald-50/40">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-200 group-hover:border-emerald-700 group-hover:bg-emerald-50 group-hover:text-emerald-800">

                        {/* Square Icon */}
                        <svg
                            className="icon-pulse"
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect
                                x="5"
                                y="5"
                                width="14"
                                height="14"
                                rx="2"
                            />
                            <rect
                                x="9"
                                y="9"
                                width="6"
                                height="6"
                                rx="1"
                            />
                        </svg>

                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-950">
                            All in One Place
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-500">
                            Finance + Shopping
                            <br />
                            for a smarter tomorrow
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Benefits