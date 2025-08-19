// src/app/utils/appFormFunctions.tsx
'use client';

import { Dispatch, SetStateAction } from 'react';

export interface FormData {
    fullName: string;
    email: string;
    phone: string;
    age: string;
    position: string;
    currentClub: string;
    contract1: File | null;
    contract2: File | null;
    message: string;
    paymentMethod: string;
    consent: boolean;
}

export interface Step {
    name: string;
    fields: string[];
}

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    setFormData: Dispatch<SetStateAction<FormData>>,
    validateField: (name: string, value: any) => void,
) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
    }));
    validateField(name, type === 'checkbox' ? checked : value);
};

export const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'contract1' | 'contract2',
    setFormData: Dispatch<SetStateAction<FormData>>,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        if (file.size <= 5 * 1024 * 1024) {
            setFormData((prev) => ({ ...prev, [field]: file }));
            setErrors((prev) => ({ ...prev, [field]: '' }));
        } else {
            setErrors((prev) => ({ ...prev, [field]: 'File size must be under 5MB' }));
        }
    } else {
        setErrors((prev) => ({ ...prev, [field]: 'Please upload a .docx file' }));
    }
};

export const validateField = (
    name: string,
    value: any,
    errors: { [key: string]: string },
    paymentConfirmed: boolean,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
) => {
    const newErrors: { [key: string]: string } = { ...errors };
    if (name === 'fullName' && !value.trim()) {
        newErrors.fullName = 'Full name is required';
    } else {
        delete newErrors.fullName;
    }
    if (name === 'email') {
        if (!value.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = 'Invalid email format';
        } else {
            delete newErrors.email;
        }
    }
    if (name === 'age') {
        if (!value) {
            newErrors.age = 'Age is required';
        } else if (parseInt(value) < 16 || parseInt(value) > 40) {
            newErrors.age = 'Age must be between 16 and 40';
        } else {
            delete newErrors.age;
        }
    }
    if (name === 'position' && !value) {
        newErrors.position = 'Please select a position';
    } else {
        delete newErrors.position;
    }
    if (name === 'contract1' && !value) {
        newErrors.contract1 = 'Contract 1 is required';
    } else {
        delete newErrors.contract1;
    }
    if (name === 'contract2' && !value) {
        newErrors.contract2 = 'Contract 2 is required';
    } else {
        delete newErrors.contract2;
    }
    if (name === 'paymentMethod' && !value) {
        newErrors.paymentMethod = 'Please select a payment method';
    } else {
        delete newErrors.paymentMethod;
    }
    if (name === 'consent' && !value) {
        newErrors.consent = 'You must agree to the terms';
    } else {
        delete newErrors.consent;
    }
    if (name === 'payment' && !paymentConfirmed) {
        newErrors.payment = 'Payment must be confirmed';
    } else {
        delete newErrors.payment;
    }
    setErrors(newErrors);
};

export const validateCurrentStep = (
    currentStep: number,
    steps: Step[],
    formData: FormData,
    paymentConfirmed: boolean,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
) => {
    const currentFields = steps[currentStep - 1].fields;
    const newErrors: { [key: string]: string } = {};
    currentFields.forEach((field) => {
        if (field === 'fullName' && !formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        if (field === 'email') {
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
        }
        if (field === 'age') {
            if (!formData.age) {
                newErrors.age = 'Age is required';
            } else if (parseInt(formData.age) < 16 || parseInt(formData.age) > 40) {
                newErrors.age = 'Age must be between 16 and 40';
            }
        }
        if (field === 'position' && !formData.position) {
            newErrors.position = 'Please select a position';
        }
        if (field === 'contract1' && !formData.contract1) {
            newErrors.contract1 = 'Contract 1 is required';
        }
        if (field === 'contract2' && !formData.contract2) {
            newErrors.contract2 = 'Contract 2 is required';
        }
        if (field === 'paymentMethod' && !formData.paymentMethod) {
            newErrors.paymentMethod = 'Please select a payment method';
        }
        if (field === 'payment' && !paymentConfirmed) {
            newErrors.payment = 'Payment must be confirmed';
        }
        if (field === 'consent' && !formData.consent) {
            newErrors.consent = 'You must agree to the terms';
        }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

export const handleNext = (
    currentStep: number,
    steps: Step[],
    setCurrentStep: Dispatch<SetStateAction<number>>,
    validateCurrentStep: () => boolean,
) => {
    if (validateCurrentStep()) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
};

export const handleBack = (
    setCurrentStep: Dispatch<SetStateAction<number>>,
) => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
};

export const handleSubmit = async (
    e: React.FormEvent,
    validateCurrentStep: () => boolean,
    setIsSubmitting: Dispatch<SetStateAction<boolean>>,
    setSubmitted: Dispatch<SetStateAction<boolean>>,
    formData: FormData,
    paymentConfirmed: boolean,
) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', { ...formData, paymentConfirmed });
    setIsSubmitting(false);
    setSubmitted(true);
};

export const handlePayment = (
    setPaymentConfirmed: Dispatch<SetStateAction<boolean>>,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
) => {
    alert('Redirecting to payment gateway... (Mock payment for demo purposes)');
    setPaymentConfirmed(true);
    setErrors((prev) => ({ ...prev, payment: '' }));
};

export const handleReset = (
    setFormData: Dispatch<SetStateAction<FormData>>,
    setPaymentConfirmed: Dispatch<SetStateAction<boolean>>,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
    setCurrentStep: Dispatch<SetStateAction<number>>,
    setSubmitted: Dispatch<SetStateAction<boolean>>,
) => {
    setFormData({
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
    setPaymentConfirmed(false);
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
};