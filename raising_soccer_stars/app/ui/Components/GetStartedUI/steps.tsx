interface Step {
    number: number;
    label: string;
    active?: boolean;
}

const steps: Step[] = [
    { number: 1, label: "Fill Form", active: true },
    { number: 2, label: "Upload Contracts" },
    { number: 3, label: "Pay Fee" }
];

export default function GetStartedSteps() {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${step.active ? "bg-[#0ea5a4] text-white" : "bg-gray-200 text-gray-400"}`}
                        >
                            {step.number}
                        </div>
                        <span className="ml-2 text-sm font-medium">{step.label}</span>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-1 mx-4 bg-gray-200">
                                <div
                                    className={`h-full transition-all duration-300 
                  ${step.active ? "bg-[#0ea5a4] w-full" : "w-0"}`}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
