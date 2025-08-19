import React from 'react';

interface FormData {
    consent: boolean;
}

interface ConsentSectionProps {
    formData: FormData;
    errors: { [key: string]: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConsentSection: React.FC<ConsentSectionProps> = ({ formData, errors, handleChange }) => {
    return (
        <div className="flex flex-row items-start space-x-3 space-y-0">
            <button
                type="button"
                role="checkbox"
                aria-checked={formData.consent}
                data-state={formData.consent ? 'checked' : 'unchecked'}
                value="on"
                className={`peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0ea5a4] data-[state=checked]:text-primary-foreground mt-1 ${errors.consent ? 'border-[#ef4444]' : ''}`}
                id="consent"
                aria-describedby="consent-description"
                aria-invalid={!!errors.consent}
                onClick={() => handleChange({ target: { name: 'consent', type: 'checkbox', checked: !formData.consent } } as any)}
            />
            <input
                type="checkbox"
                aria-hidden="true"
                tabIndex={-1}
                value="on"
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    opacity: 0,
                    margin: 0,
                    transform: 'translateX(-100%)',
                    width: '16px',
                    height: '16px',
                }}
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
            />
            <div className="space-y-1 leading-none">
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="consent">
                    I agree to the terms and conditions and privacy policy for data use in agency evaluation *
                </label>
            </div>
            {errors.consent && <p className="text-[#ef4444] text-sm">{errors.consent}</p>}
        </div>
    );
};

export default ConsentSection;