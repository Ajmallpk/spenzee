import { Navbar } from "../sections/Navbar"
import Hero from "../sections/Hero"
import Benefits from "../sections/Benefits/Benefits"
import Ecosystem from "../sections/Ecosystem/Ecosystem"
import TrustedBy from "../sections/TrustedBy/TrustedBy"
import FinanceShopping from "../sections/FinanceShopping/FinanceShopping"
import Stats from "../sections/Stats/Stats"
import Testimonials from "../sections/Testimonials/Testimonials"
import CTA from "../sections/CTA/CTA"
import Footer from "../sections/Footer/Footer"


const LandingPage = () => {
    return (
        <main id="home" className="min-h-screen">

            <div className="relative">

                {/* Navbar floating over Hero */}
                {/* Sticky Navbar */}
                <div className="fixed left-0 right-0 top-0 z-50">
                    <Navbar />
                </div>

                {/* Hero */}
                <Hero />

                {/* Benefits */}
                <Benefits />

                {/* Ecosystem */}
                <Ecosystem />

                {/* Trustedby */}
                <TrustedBy />

                {/* FinanceShopping */}
                <FinanceShopping />

                {/* Stats */}
                <Stats />

                {/* Testimonials */}
                <Testimonials />

                {/* CTA */}
                <CTA />

                {/* Footer */}
                <Footer />


            </div>

        </main>
    )
}

export default LandingPage