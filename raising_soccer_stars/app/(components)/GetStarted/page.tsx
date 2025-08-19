// src/app/get-started/page.tsx
'use client';

import React, { useState } from 'react';
import GetStartedHeader from '@/app/ui/Components/GetStartedUI/header';
import ProgressIndicator from '@/app/ui/Components/GetStartedUI/progressIndicator';
import ApplicationForm from '@/app/ui/Components/GetStartedUI/applicationForm';
import FooterSection from '@/app/ui/Components/GetStartedUI/footerSection';

interface Step {
    name: string;
    fields: string[];
}

const GetStartedPage: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps: Step[] = [
        { name: 'Personal Info', fields: ['fullName', 'email', 'phone', 'age', 'position', 'currentClub'] },
        { name: 'Contract Uploads', fields: ['contract1', 'contract2'] },
        { name: 'Message', fields: ['message'] },
        { name: 'Payment', fields: ['paymentMethod', 'payment'] },
        { name: 'Consent', fields: ['consent'] },
    ];

    return (
        <main className="pt-24 pb-20 px-4 sm:px-6 animate-in slide-in-from-bottom-6" style={{ animationDelay: '0ms' }}>
            <div className="max-w-3xl mx-auto">
                <GetStartedHeader />
                <ProgressIndicator currentStep={currentStep} steps={steps} />
                <ApplicationForm currentStep={currentStep} setCurrentStep={setCurrentStep} steps={steps} />
                <FooterSection />
            </div>
        </main>
    );
};

export default GetStartedPage;