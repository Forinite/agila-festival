import React, { useState, useRef, useEffect } from 'react';
import { CreditCard, ChevronDown } from 'lucide-react';

interface FormData {
    paymentMethod: string;
}

interface PaymentSectionProps {
    formData: FormData;
    errors: { [key: string]: string };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handlePayment: () => void;
    paymentConfirmed: boolean;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
                                                           formData,
                                                           errors,
                                                           handleChange,
                                                           handlePayment,
                                                           paymentConfirmed,
                                                       }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const paymentMethods = [
        { value: 'paystack', label: 'Paystack (Nigerian players)' },
        { value: 'stripe', label: 'Stripe (International)' },
        { value: 'bank', label: 'Bank Transfer' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle payment method selection
    const handlePaymentMethodSelect = (value: string) => {
        const syntheticEvent = {
            target: { name: 'paymentMethod', value },
        } as React.ChangeEvent<HTMLSelectElement>;
        handleChange(syntheticEvent);
        setIsDropdownOpen(false);
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsDropdownOpen((prev) => !prev);
        }
        if (event.key === 'Escape') {
            setIsDropdownOpen(false);
        }
    };

    return (
        <div className="border-t pt-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-[#0ea5a4]" />
                Payment Information
            </h3>
            <div className="bg-[#0ea5a4]/5 p-4 rounded-md mb-4">
                <p className="text-lg font-semibold text-[#0ea5a4]">Application Fee: ₦10,000</p>
                <p className="text-sm text-gray-600">For international players: $25 USD / €22 EUR</p>
                <p className="text-xs text-gray-500 mt-2">Note: This is a mock payment for demo purposes. Select a method and click "Proceed to Payment" to continue.</p>
            </div>
            <div className="space-y-2">
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="paymentMethod">
                    Payment Method *
                </label>
                <div className="relative" ref={dropdownRef}>
                    <div
                        role="combobox"
                        aria-controls="payment-options"
                        aria-expanded={isDropdownOpen}
                        aria-autocomplete="none"
                        tabIndex={0}
                        className={`flex h-12 w-full items-center justify-between border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0ea5a4] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 border-gray-300 rounded-md p-3 cursor-pointer ${errors.paymentMethod ? 'border-[#ef4444]' : ''}`}
                        id="paymentMethod"
                        aria-describedby="paymentMethod-description"
                        aria-invalid={!!errors.paymentMethod}
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        onKeyDown={handleKeyDown}
                    >
            <span>
              {formData.paymentMethod
                  ? paymentMethods.find((p) => p.value === formData.paymentMethod)?.label || 'Select payment method'
                  : 'Select payment method'}
            </span>
                        <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </div>
                    {isDropdownOpen && (
                        <ul
                            id="payment-options"
                            className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg"
                            role="listbox"
                            aria-labelledby="paymentMethod"
                        >
                            {paymentMethods.map((method) => (
                                <li
                                    key={method.value}
                                    role="option"
                                    aria-selected={formData.paymentMethod === method.value}
                                    className={`px-3 py-2 text-sm hover:bg-[#0ea5a4] hover:text-white cursor-pointer ${formData.paymentMethod === method.value ? 'bg-[#0ea5a4] text-white' : ''}`}
                                    onClick={() => handlePaymentMethodSelect(method.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handlePaymentMethodSelect(method.value);
                                        }
                                    }}
                                    tabIndex={0}
                                >
                                    {method.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {errors.paymentMethod && <p className="text-[#ef4444] text-sm">{errors.paymentMethod}</p>}
            </div>
            <button
                type="button"
                onClick={handlePayment}
                className="inline-flex items-center justify-center w-full bg-[#ef4444] text-white hover:bg-[#dc2626] hover:scale-105 transition-all duration-300 text-lg px-8 py-3 h-12 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                disabled={paymentConfirmed}
            >
                {paymentConfirmed ? 'Payment Confirmed' : 'Proceed to Payment'}
            </button>
            {errors.payment && <p className="text-[#ef4444] text-sm">{errors.payment}</p>}
        </div>
    );
};

export default PaymentSection;