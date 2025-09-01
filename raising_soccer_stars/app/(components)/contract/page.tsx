import React from "react";

// Define interface for document data
interface Document {
    title: string;
    description: string;
    fileUrl: string;
}

// Define props for DocumentCard
interface DocumentCardProps {
    title: string;
    description: string;
    fileUrl: string;
}

// Sample document data (replace with actual documents)
const documents: Document[] = [
    {
        title: "Player Contract Agreement",
        description:
            "Official contract template for players signing with Absolute Trust Soccer Agency. Includes terms and conditions for representation.",
        fileUrl: "/documents/player-contract.pdf", // Replace with actual file path or URL
    },
    {
        title: "Agent Authorization Form",
        description:
            "Form to authorize Absolute Trust Soccer Agency to represent you in negotiations and agreements.",
        fileUrl: "/documents/agent-authorization.pdf", // Replace with actual file path or URL
    },
];

// DocumentCard component
const DocumentCard: React.FC<DocumentCardProps> = ({ title, description, fileUrl }) => {
    return (
        <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-transform duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom-6">
            <div className="flex flex-col space-y-2 p-6 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0ea5a4] text-center leading-snug">
                    {title}
                </h3>
            </div>
            <div className="p-6 pt-0">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center">
                    {description}
                </p>
                <div className="mt-4 flex justify-center">
                    <a
                        href={fileUrl}
                        download
                        className="inline-block bg-[#0ea5a4] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#0c8c8b] transition-colors duration-300"
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
};

// ContractPage component
const ContractPage: React.FC = () => {
    return (
        <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0ea5a4] mb-4 sm:mb-6">
                        Contracts & Documents
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto">
                        Download the necessary documents to formalize your partnership with Absolute Trust Soccer Agency.
                    </p>
                </div>

                {/* Document Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {documents.map((doc, index) => (
                        <DocumentCard
                            key={index}
                            title={doc.title}
                            description={doc.description}
                            fileUrl={doc.fileUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContractPage;;
