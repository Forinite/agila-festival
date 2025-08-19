import React from 'react';

const FooterSection: React.FC = () => {
    return (
        <div className="text-center mt-8 space-y-2">
            <p className="text-gray-600">
                Need help? Contact us directly at{' '}
                <a href="mailto:info@absolutetrustsoccer.ng" className="text-[#0ea5a4] hover:underline">
                    info@absolutetrustsoccer.ng
                </a>
            </p>
            <p className="text-gray-600">
                or visit our{' '}
                <a href="/contact" className="text-[#0ea5a4] hover:underline">
                    Contact page
                </a>
            </p>
        </div>
    );
};

export default FooterSection;