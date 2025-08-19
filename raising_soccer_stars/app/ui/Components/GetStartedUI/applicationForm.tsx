// src/app/get-started/page.tsx
// src/app/ui/Components/GetStartedUI/applicationForm.tsx
'use client';

import React, { useState } from 'react';
import PersonalInfoSection from './personalInfoSection';
import ContractUploadSection from './contractUploadSection';
import MessageSection from './messageSection';
import PaymentSection from './paymentSection';
import ConsentSection from './consentSection';
import {
    FormData,
    Step,
    handleChange,
    handleFileChange,
    validateField,
    validateCurrentStep,
    handleNext,
    handleBack,
    handleSubmit,
    handlePayment,
    handleReset,
} from '@/app/constants/appFormFunctions';
import { AlertCircle } from 'lucide-react';

interface ApplicationFormProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    steps: Step[];
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ currentStep, setCurrentStep, steps }) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        age: '18',
        position: '',
        currentClub: '',
        contract1: null,
        contract2: null,
        message: '',
        paymentMethod: '',
        consent: false,
    });
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (submitted) {
        return (
            <div className="border text-gray-800 dark:text-gray-200 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
                <div className="p-6 text-center">
                    <p className="text-2xl font-semibold text-teal-500 dark:text-teal-400 mb-4">
                        Application Submitted Successfully!
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Our team will review your details and contact you soon.
                    </p>
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-white dark:focus:ring-offset-gray-800 h-12 w-full bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                        onClick={() => handleReset(setFormData, setPaymentConfirmed, setErrors, setCurrentStep, setSubmitted)}
                    >
                        Start Over
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="border text-gray-800 dark:text-gray-200 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="p-6 sm:p-8">
                {/* Error Summary */}
                {Object.keys(errors).length > 0 && currentStep !== steps.length && (
                    <div
                        className="bg-red-50 dark:bg-red-900/30 p-4 rounded-md mb-6"
                        role="alert"
                        aria-live="assertive"
                    >
                        <p className="text-red-500 dark:text-red-400 text-sm font-medium flex items-center gap-2">
                            <AlertCircle size={16} />
                            Please fix the following errors:
                        </p>
                        <ul className="list-disc list-inside text-red-500 dark:text-red-400 text-sm mt-2">
                            {Object.entries(errors)
                                .filter(([key]) => steps[currentStep - 1].fields.includes(key))
                                .map(([key, error]) => (
                                    <li key={key}>{error}</li>
                                ))}
                        </ul>
                    </div>
                )}

                {/* Form Steps */}
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e, () => validateCurrentStep(currentStep, steps, formData, paymentConfirmed, setErrors), setIsSubmitting, setSubmitted, formData, paymentConfirmed)}>
                    <section aria-labelledby={`step-${currentStep}-title`} className="animate-in slide-in-from-bottom-6">
                        {currentStep === 1 && (
                            <PersonalInfoSection
                                formData={formData}
                                errors={errors}
                                handleChange={(e) => handleChange(e, setFormData, (name, value) => validateField(name, value, errors, paymentConfirmed, setErrors))}
                            />
                        )}
                        {currentStep === 2 && (
                            <ContractUploadSection
                                formData={formData}
                                errors={errors}
                                handleFileChange={(e, field) => handleFileChange(e, field, setFormData, setErrors)}
                            />
                        )}
                        {currentStep === 3 && (
                            <MessageSection
                                formData={formData}
                                handleChange={(e) => handleChange(e, setFormData, (name, value) => validateField(name, value, errors, paymentConfirmed, setErrors))}
                            />
                        )}
                        {currentStep === 4 && (
                            <PaymentSection
                                formData={formData}
                                errors={errors}
                                handleChange={(e) => handleChange(e, setFormData, (name, value) => validateField(name, value, errors, paymentConfirmed, setErrors))}
                                handlePayment={() => handlePayment(setPaymentConfirmed, setErrors)}
                                paymentConfirmed={paymentConfirmed}
                            />
                        )}
                        {currentStep === 5 && (
                            <ConsentSection
                                formData={formData}
                                errors={errors}
                                handleChange={(e) => handleChange(e, setFormData, (name, value) => validateField(name, value, errors, paymentConfirmed, setErrors))}
                            />
                        )}
                    </section>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 flex-col sm:flex-row gap-4">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-white dark:focus:ring-offset-gray-800 h-12 w-full sm:w-1/2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                                onClick={() => handleBack(setCurrentStep)}
                            >
                                Back
                            </button>
                        )}
                        {currentStep < steps.length ? (
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-white dark:focus:ring-offset-gray-800 h-12 w-full sm:w-1/2 bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                                onClick={() => handleNext(currentStep, steps, setCurrentStep, () => validateCurrentStep(currentStep, steps, formData, paymentConfirmed, setErrors))}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-white dark:focus:ring-offset-gray-800 h-12 w-full bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition-all duration-300 text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isSubmitting || !paymentConfirmed}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;