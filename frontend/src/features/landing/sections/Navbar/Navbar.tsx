import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import logo from "../../../../assets/dollerlogo.webp"

const Navbar = () => {
    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <header className="px-4 pt-4">

            <nav
                className={`
                    mx-auto flex max-w-5xl items-center justify-between
                    rounded-full px-5 py-3
                    transition-all duration-300
                    ${
                        scrolled
                            ? "border border-white/40 bg-white/65 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl"
                            : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                    }
                `}
            >

                {/* ================= LOGO ================= */}

                <div 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 cursor-pointer"
                >

                    <img
                        src={logo}
                        alt="Spenzee"
                        className="h-8 w-8 object-contain"
                    />

                    <span className="text-xl font-extrabold tracking-tight text-slate-950">
                        Spenzee
                    </span>

                </div>


                {/* ================= NAVIGATION ================= */}

                <div className="hidden items-center gap-6 md:flex">

                    <a
                        href="#home"
                        className="group relative rounded-full px-3 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        Home

                        <span className="absolute -bottom-1 left-3 h-0.5 w-0 rounded-full bg-emerald-800 transition-all duration-200 group-hover:w-[calc(100%-24px)]" />
                    </a>


                    <a
                        href="#how-it-works"
                        className="group relative rounded-full px-3 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        How It Works

                        <span className="absolute -bottom-1 left-3 h-0.5 w-0 rounded-full bg-emerald-800 transition-all duration-200 group-hover:w-[calc(100%-24px)]" />
                    </a>


                    <a
                        href="#features"
                        className="group relative rounded-full px-3 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        Features

                        <span className="absolute -bottom-1 left-3 h-0.5 w-0 rounded-full bg-emerald-800 transition-all duration-200 group-hover:w-[calc(100%-24px)]" />
                    </a>


                    <a
                        href="#providers"
                        className="group relative rounded-full px-3 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        For Providers

                        <span className="absolute -bottom-1 left-3 h-0.5 w-0 rounded-full bg-emerald-800 transition-all duration-200 group-hover:w-[calc(100%-24px)]" />
                    </a>


                    <a
                        href="#about"
                        className="group relative rounded-full px-3 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        About

                        <span className="absolute -bottom-1 left-3 h-0.5 w-0 rounded-full bg-emerald-800 transition-all duration-200 group-hover:w-[calc(100%-24px)]" />
                    </a>

                </div>


                {/* ================= BUTTONS ================= */}

                <div className="flex items-center gap-2.5">

                    {/* Sign In */}

                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        className={`
                            hidden rounded-full px-5 py-2.5
                            text-sm font-medium
                            transition-all duration-200
                            sm:block cursor-pointer
                            ${
                                scrolled
                                    ? "border border-slate-300/70 bg-white/50 text-slate-800 hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                                    : "border border-slate-300 bg-white text-slate-800 hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                            }
                        `}
                    >
                        Sign In
                    </button>


                    {/* Get Started */}

                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                        className="rounded-full bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-900 hover:shadow-md cursor-pointer"
                    >
                        Get Started
                    </button>

                </div>

            </nav>

        </header>
    )
}

export default Navbar