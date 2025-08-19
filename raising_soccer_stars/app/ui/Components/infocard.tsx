import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

type InfoCardProps = {
    title: string;
    content: string;
    delay?: number;
};

function InfoCard({ title, content, delay = 200 }: InfoCardProps) {
    return (
        <div
            className="rounded-lg text-[#000] shadow-sm bg-gradient-to-br from-[#f0fdfa] to-[#ccfbf1] shadow-gray-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 animate-in slide-in-from-bottom-6"
            style={{ animationDelay: `${delay}ms`, animationDuration: "800ms" }}
        >
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <h3 className="tracking-tight text-2xl font-bold text-[#0ea5a4] text-center">
                    {title}
                </h3>
            </div>
            <div className="p-6 pt-0">
                <div className="text-gray-800/80 leading-relaxed text-center">
                    {content}
                </div>
            </div>
        </div>
    );
}

type ContactCardProps = {
    delay?: number;
};

function ContactCard({ delay = 1000 }: ContactCardProps) {
    return (
        <div
            className="rounded-lg bg-gradient-to-br from-[#0ea5a4] to-[#06b6d4] text-[#ffffff] shadow-hero border-0 animate-in slide-in-from-bottom-6"
            style={{ animationDelay: `${delay}ms`, animationDuration: "800ms" }}
        >
            <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                <h3 className="tracking-tight text-3xl font-bold">Get Started</h3>
                <p className="text-white/90 text-lg">
                    Ready to take the first step towards your soccer dreams?
                </p>
            </div>
            <div className="p-6 pt-0 space-y-6">
                <p className="text-center text-white/80 leading-relaxed">
                    Contact us today to schedule a consultation and discover how Absolute
                    Trust Soccer Agency can help you elevate your game to new heights.
                    Trust the journey. Trust Absolute Trust.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/90">
                        <Mail className="h-5 w-5" />
                        <span>info@absolutetrustsoccer.ng</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                        <Phone className="h-5 w-5" />
                        <span>+234 (0) 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                        <MapPin className="h-5 w-5" />
                        <span>Lagos, Nigeria</span>
                    </div>
                </div>
                <div className="pt-4 text-center">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium bg-[#ef4444] text-[#ffffff] hover:bg-[#ef4444]/80 h-11 rounded-md hover:scale-105 transition-all duration-300 text-lg px-8 py-6">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function InfoSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <InfoCard
                        title="About Us"
                        content="At Absolute Trust Soccer Agency of Nigeria, we're more than just representatives; we're guardians of dreams, architects of destinies. With a legacy built on integrity, expertise, and unwavering commitment, we stand as your steadfast ally in the pursuit of greatness."
                        delay={200}
                    />
                    <InfoCard
                        title="Why Choose Us?"
                        content="Experience the difference that absolute trust makes. Our team of seasoned professionals brings decades of collective experience, guiding you through every twist and turn of your soccer journey with unparalleled expertise and unwavering support."
                        delay={400}
                    />
                    <InfoCard
                        title="Our Promise"
                        content="When you choose Absolute Trust Soccer Agency, you're not just choosing representation; you're choosing a partnership founded on trust, transparency, and tireless dedication. From contract negotiations to career management, we're here to empower you to reach your full potential, on and off the field."
                        delay={600}
                    />
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InfoCard
                        title="Join the Movement"
                        content="Join a community of champions, where ambition knows no bounds and success knows no limits. Whether you're a rising star or a seasoned veteran, your journey to greatness starts here. Welcome to Absolute Trust Soccer Agency, where every goal is within reach."
                        delay={800}
                    />
                    <ContactCard delay={1000} />
                </div>
            </div>
        </section>
    );
}
