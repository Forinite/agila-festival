import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCard: React.FC = () => {
    return (
        <div className="rounded-lg bg-gradient-to-r from-[#0ea5a4] to-[#06b6d4] text-white shadow-lg p-6 animate-slide-in-bottom">
            <div className="text-center pb-4">
                <h3 className="text-3xl font-bold">Get Started</h3>
                <p className="text-lg opacity-90">
                    Ready to take the first step towards your soccer dreams?
                </p>
            </div>
            <div className="space-y-6">
                <p className="text-center opacity-80 leading-relaxed">
                    Contact us today to schedule a consultation and discover how Absolute Trust Soccer Agency can help you elevate your game to new heights. Trust the journey. Trust Absolute Trust.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 opacity-90">
                        <Mail className="h-5 w-5" />
                        <span>info@absolutetrustsoccer.ng</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-90">
                        <Phone className="h-5 w-5" />
                        <span>+234 (0) 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-90">
                        <MapPin className="h-5 w-5" />
                        <span>Lagos, Nigeria</span>
                    </div>
                </div>
                {/*<div className="pt-4 text-center">*/}
                {/*    <button className="inline-flex items-center justify-center rounded-md bg-[#ef4444] text-white hover:bg-[#dc2626] hover:scale-105 transition-all duration-300 text-lg px-8 py-6">*/}
                {/*        Schedule Consultation*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ContactCard;