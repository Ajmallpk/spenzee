import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import logo from "../../../../assets/dollerlogo.webp"

export interface NavbarProps {
    transparent?: boolean
}

const Navbar = ({ transparent = false }: NavbarProps) => {
    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false)

    const getHref = (hash: string) => {
        return window.location.pathname === '/' ? hash : `/${hash}`
    }

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
                        transparent
                            ? "border border-white/20 bg-black/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white"
                            : scrolled
                            ? "border border-white/40 bg-white/65 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl text-slate-900"
                            : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-slate-900"
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

                    <span className={`text-xl font-extrabold tracking-tight ${transparent ? 'text-white drop-shadow' : 'text-slate-950'}`}>
                        Spenzee
                    </span>

                </div>


                {/* ================= NAVIGATION ================= */}

                <div className="hidden items-center gap-6 md:flex">

                    <a
                        href={getHref("#home")}
                        className={`group relative rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                            transparent
                                ? "text-white/95 hover:bg-white/15 hover:text-white"
                                : "text-slate-900 hover:bg-emerald-50 hover:text-emerald-800"
                        }`}
                    >
                        Home

                        <span className={`absolute -bottom-1 left-3 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-[calc(100%-24px)] ${
                            transparent ? "bg-[#68b991]" : "bg-emerald-800"
                        }`} />
                    </a>


                    <a
                        href={getHref("#how-it-works")}
                        className={`group relative rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                            transparent
                                ? "text-white/95 hover:bg-white/15 hover:text-white"
                                : "text-slate-900 hover:bg-emerald-50 hover:text-emerald-800"
                        }`}
                    >
                        How It Works

                        <span className={`absolute -bottom-1 left-3 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-[calc(100%-24px)] ${
                            transparent ? "bg-[#68b991]" : "bg-emerald-800"
                        }`} />
                    </a>


                    <a
                        href={getHref("#features")}
                        className={`group relative rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                            transparent
                                ? "text-white/95 hover:bg-white/15 hover:text-white"
                                : "text-slate-900 hover:bg-emerald-50 hover:text-emerald-800"
                        }`}
                    >
                        Features

                        <span className={`absolute -bottom-1 left-3 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-[calc(100%-24px)] ${
                            transparent ? "bg-[#68b991]" : "bg-emerald-800"
                        }`} />
                    </a>


                    <a
                        href={getHref("#providers")}
                        className={`group relative rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                            transparent
                                ? "text-white/95 hover:bg-white/15 hover:text-white"
                                : "text-slate-900 hover:bg-emerald-50 hover:text-emerald-800"
                        }`}
                    >
                        For Providers

                        <span className={`absolute -bottom-1 left-3 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-[calc(100%-24px)] ${
                            transparent ? "bg-[#68b991]" : "bg-emerald-800"
                        }`} />
                    </a>


                    <a
                        href={getHref("#about")}
                        className={`group relative rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                            transparent
                                ? "text-white/95 hover:bg-white/15 hover:text-white"
                                : "text-slate-900 hover:bg-emerald-50 hover:text-emerald-800"
                        }`}
                    >
                        About

                        <span className={`absolute -bottom-1 left-3 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-[calc(100%-24px)] ${
                            transparent ? "bg-[#68b991]" : "bg-emerald-800"
                        }`} />
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
                                transparent
                                    ? "border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
                                    : scrolled
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
                        className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer ${
                            transparent
                                ? "bg-[#68b991] text-[#0b1914] font-bold hover:bg-[#8fc7a9] hover:shadow-md"
                                : "bg-emerald-950 text-white hover:bg-emerald-900 hover:shadow-md"
                        }`}
                    >
                        Get Started
                    </button>

                </div>

            </nav>

        </header>
    )
}

export default Navbar