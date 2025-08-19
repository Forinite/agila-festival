import React from 'react';
import ContactCard from '@/app/ui/Components/ContactCard';

// Define constants for data
const CONTACT_INFO = {
    title: 'Get In Touch',
    description: 'Whether you\'re a player looking for representation, a club seeking talent, or a partner interested in collaboration, we\'d love to hear from you.',
    emails: [
        { label: 'General Inquiries', email: 'info@absolutetrust.ng' },
        { label: 'Player Representation', email: 'players@absolutetrust.ng' },
        { label: 'Club Partnerships', email: 'clubs@absolutetrust.ng' },
        { label: 'Media Inquiries', email: 'media@absolutetrust.ng' },
    ],
};

const BUSINESS_HOURS = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

const OFFICES = [
    {
        title: 'Lagos Office',
        details: ['123 Victoria Island', 'Lagos, Nigeria', '+234 801 234 5678', 'lagos@absolutetrust.ng'],
    },
    {
        title: 'Abuja Office',
        details: ['456 Central Business District', 'Abuja, Nigeria', '+234 802 345 6789', 'abuja@absolutetrust.ng'],
    },
    {
        title: 'European Office',
        details: ['789 Football District', 'Madrid, Spain', '+34 911 234 567', 'europe@absolutetrust.ng'],
    },
];

const EMERGENCY_CONTACT = {
    title: '24/7 Emergency Contact',
    description: 'For urgent matters requiring immediate attention, our emergency hotline is available 24/7 for all represented players.',
    phone: '+234 800 ABSOLUTE',
    phoneNumeric: '(+234 800 227 6588)',
};

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-16 pb-12 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#0ea5a4] mb-3">Contact Us</h1>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            Ready to start your journey with Absolute Trust Soccer Agency? Get in touch with our team of experts.
                        </p>
                    </div>

                    {/* Contact Card and Info Section */}
                    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-10">
                        <ContactCard />
                        <div className="space-y-6">
                            {/* Get In Touch */}
                            <article className="rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300">
                                <header className="p-4">
                                    <h3 className="text-lg font-bold text-[#0ea5a4]">{CONTACT_INFO.title}</h3>
                                </header>
                                <div className="px-4 pb-4 space-y-4 text-gray-600">
                                    <p className="text-sm">{CONTACT_INFO.description}</p>
                                    <div className="space-y-2 text-sm">
                                        {CONTACT_INFO.emails.map((item, i) => (
                                            <p key={i}>
                                                <strong className="text-[#0ea5a4]">{item.label}:</strong> {item.email}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </article>

                            {/* Business Hours */}
                            <article className="rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300">
                                <header className="p-4">
                                    <h3 className="text-lg font-bold text-[#0ea5a4]">Business Hours</h3>
                                </header>
                                <div className="px-4 pb-4 space-y-3 text-sm">
                                    {BUSINESS_HOURS.map((item, i) => (
                                        <div key={i} className="flex justify-between">
                                            <span className="text-gray-600">{item.day}</span>
                                            <span className="font-semibold text-[#0ea5a4]">{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* Offices */}
                    <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
                        {OFFICES.map((office, i) => (
                            <article
                                key={i}
                                className="rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <header className="p-4">
                                    <h3 className="text-lg font-bold text-[#0ea5a4] text-center">{office.title}</h3>
                                </header>
                                <div className="px-4 pb-4 text-center text-sm text-gray-600">
                                    {office.details.map((detail, j) => (
                                        <p key={j}>{detail}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </section>

                    {/* Emergency Contact */}
                    <article className="rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300">
                        <header className="p-4">
                            <h3 className="text-lg font-bold text-[#0ea5a4] text-center">{EMERGENCY_CONTACT.title}</h3>
                        </header>
                        <div className="px-4 pb-4 text-center">
                            <p className="text-sm text-gray-600 mb-3">{EMERGENCY_CONTACT.description}</p>
                            <div className="space-y-1">
                                <p className="text-base font-bold text-[#0ea5a4]">{EMERGENCY_CONTACT.phone}</p>
                                <p className="text-xs text-gray-500">{EMERGENCY_CONTACT.phoneNumeric}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
}