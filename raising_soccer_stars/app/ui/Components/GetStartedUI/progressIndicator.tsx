// src/app/ui/Components/GetStartedUI/progressIndicator.tsx
import React from 'react';

interface Step {
    name: string;
    fields: string[];
}

interface ProgressIndicatorProps {
    currentStep: number;
    steps: Step[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, steps }) => {
    const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div
            className="mb-6 px-4"
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-label="Form progress"
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                {steps.map((step, index) => (
                    <React.Fragment key={step.name}>
                        <div className="flex items-center min-w-0">
                            <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                    currentStep >= index + 1
                                        ? 'bg-teal-500 text-white dark:bg-teal-400'
                                        : 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                                }`}
                                aria-current={currentStep === index + 1 ? 'step' : undefined}
                            >
                                {index + 1}
                            </div>
                            <span
                                className={`ml-1.5 text-xs font-medium truncate ${
                                    currentStep >= index + 1
                                        ? 'text-teal-500 dark:text-teal-400'
                                        : 'text-gray-400 dark:text-gray-500'
                                }`}
                            >
                {step.name}
              </span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-0.5 mx-2 bg-gray-200 dark:bg-gray-700 sm:h-1 sm:mx-3">
                                <div
                                    className="h-full bg-teal-500 dark:bg-teal-400 transition-all duration-300"
                                    style={{ width: currentStep > index + 1 ? '100%' : currentStep === index + 1 ? '50%' : '0%' }}
                                ></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProgressIndicator;