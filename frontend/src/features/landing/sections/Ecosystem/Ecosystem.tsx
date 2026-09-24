import userImage from "../../../../assets/foruserssection.png"
import providerImage from "../../../../assets/forprovidersection.png"
import adminImage from "../../../../assets/foradminsection.png"

const Ecosystem = () => {
    return (
        <section
            className="w-full px-6 py-20 md:px-10 lg:px-14"
            style={{
                background: `
            radial-gradient(
                ellipse 45% 35% at 8% 18%,
                rgba(190, 235, 207, 0.65) 0%,
                rgba(190, 235, 207, 0.35) 35%,
                transparent 75%
            ),
            radial-gradient(
                ellipse 40% 30% at 92% 22%,
                rgba(250, 238, 211, 0.75) 0%,
                rgba(250, 238, 211, 0.4) 40%,
                transparent 75%
            ),
            radial-gradient(
                ellipse 50% 35% at 5% 82%,
                rgba(202, 238, 215, 0.55) 0%,
                rgba(202, 238, 215, 0.25) 45%,
                transparent 80%
            ),
            radial-gradient(
                ellipse 45% 35% at 95% 82%,
                rgba(248, 229, 193, 0.6) 0%,
                rgba(248, 229, 193, 0.3) 45%,
                transparent 80%
            ),
            #f8f7f3
        `,
            }}
        >

            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center">

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                    Built for a Smarter Ecosystem
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                    Spenzee brings together smart users, trusted providers, and a
                    powerful admin system to create a seamless financial shopping
                    experience.
                </p>

            </div>


            {/* Cards */}
            <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">


                {/* ================= USERS ================= */}
                <div className="group relative overflow-hidden rounded-2xl">

                    <img
                        src={userImage}
                        alt="For Users"
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Content */}
                    <div className="absolute left-7 top-7">

                        {/* Icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19a6 6 0 00-12 0M9 11a4 4 0 100-8 4 4 0 000 8zM19 8v6M22 11h-6"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="mt-5 text-2xl font-bold text-slate-950">
                            For Users
                        </h3>

                        {/* Description */}
                        <p className="mt-2.5 max-w-[225px] text-[14px] font-medium leading-[1.45] text-slate-700">
                            Track your spending, get insights,
                            <br />
                            and discover products tailored
                            <br />
                            to your lifestyle.
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            className="mt-6 rounded-xl bg-emerald-950 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg"
                        >
                            Start as a User
                            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </button>

                    </div>

                </div>


                {/* ================= PROVIDERS ================= */}
                <div className="group relative overflow-hidden rounded-2xl">

                    <img
                        src={providerImage}
                        alt="For Providers"
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Content */}
                    <div className="absolute left-7 top-7">

                        {/* Icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h18M5 10V20h14V10M4 10l2-6h12l2 6M9 14h6"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="mt-5 text-2xl font-bold text-slate-950">
                            For Providers
                        </h3>

                        {/* Description */}
                        <p className="mt-2.5 max-w-[225px] text-[14px] font-medium leading-[1.45] text-slate-700">
                            Sell your products, reach the
                            <br />
                            right audience, and grow your
                            <br />
                            business with Spenzee.
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            className="mt-6 rounded-xl bg-emerald-950 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg"
                        >
                            Become a Provider
                            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </button>

                    </div>

                </div>


                {/* ================= ADMINS ================= */}
                <div className="group relative overflow-hidden rounded-2xl">

                    <img
                        src={adminImage}
                        alt="For Admins"
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Content */}
                    <div className="absolute left-7 top-7">

                        {/* Icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6v.2h-2.5V20a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H6v-2.5h.2a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 001.9.3 1.7 1.7 0 001-1.6V5h2.5v.2a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 00-.3 1.9 1.7 1.7 0 001.6 1h.2v2.5h-.2a1.7 1.7 0 00-1.6 1z"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="mt-5 text-2xl font-bold text-slate-950">
                            For Admins
                        </h3>

                        {/* Description */}
                        <p className="mt-2.5 max-w-[225px] text-[14px] font-medium leading-[1.45] text-slate-700">
                            Manage the entire platform,
                            <br />
                            ensure trust, and drive growth
                            <br />
                            across the ecosystem.
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            className="mt-6 rounded-xl bg-emerald-950 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg"
                        >
                            Admin Portal
                            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Ecosystem