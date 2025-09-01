import Link from "next/link";

export default function Page() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/Soccer.png")' }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(14,165,164,0.9)] via-[rgba(14,165,164,0.2)] to-[rgba(6,182,212,0.1)]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-in slide-in-from-bottom-6 duration-1000">
                    Absolute Trust Soccer Agency
                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-[rgba(255,255,255,0.9)] mb-3 sm:mb-4 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                    of Nigeria
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[rgba(255,255,255,0.85)] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-10 duration-1000 delay-400">
                    Where passion meets precision, and dreams find their wings. Step into a
                    world where trust is absolute, and success is inevitable. Welcome to
                    the heartbeat of soccer excellence.
                </p>

                <Link href={'/GetStarted'} className="inline-flex items-center justify-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#ef4444] text-white hover:bg-[rgba(249,38,38,1)] cursor-pointer rounded-md animate-in slide-in-from-bottom-12 hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    Get Started Today
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-[rgba(255,255,255,0.5)] rounded-full flex justify-center">
                    <div className="w-1 h-2 sm:h-3 bg-[rgba(255,255,255,0.5)] rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
}
