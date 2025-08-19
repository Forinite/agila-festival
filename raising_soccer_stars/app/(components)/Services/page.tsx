import { cards } from "@/app/constants/servicepage";

type InfoCardProps = {
    title: string;
    content: string;
    animationDelayMs?: number; // purely informational for markup — no client-side animation here
};

function InfoCard({ title, content }: InfoCardProps) {
    return (
        <article
            className="rounded-lg bg-gradient-to-br from-[#f0fdfa] to-[#ccfbf1]
                 shadow-md hover:shadow-lg transition-transform duration-500 hover:-translate-y-2"
        >
            <header className="flex flex-col space-y-1.5 p-6 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0ea5a4] text-center">
                    {title}
                </h3>
            </header>

            <div className="p-6 pt-0">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
                    {content}
                </p>
            </div>
        </article>
    );
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page content */}
            <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Heading Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0ea5a4] mb-4 sm:mb-6">
                            Our Services
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto">
                            Comprehensive soccer representation services designed to elevate
                            your career and secure your future in professional soccer.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <section
                        aria-labelledby="services-grid"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {cards.map((c) => (
                            <InfoCard key={c.title} title={c.title} content={c.content} />
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
}
