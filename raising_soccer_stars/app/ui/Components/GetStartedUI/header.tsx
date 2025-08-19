import { Zap } from "lucide-react";

export default function GetStartedHeader() {
    return (
        <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-[#0ea5a4]" />
            </div>
            <h1 className="text-3xl font-bold text-[#0ea5a4] mb-3">
                Start Your Football Journey with Absolute Trust
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
                Submit your details, contracts, and payment to join our agency. Our team will review your application and guide you to the next level.
            </p>
            <p className="text-sm text-gray-600 italic mt-3">
                Your football future starts here.
            </p>
        </div>
    );
}