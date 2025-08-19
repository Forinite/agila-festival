// src/app/ui/Components/GetStartedUI/contractUploadSection.tsx
import React, { useState } from 'react';
import { FileText, Upload, Info, AlertCircle } from 'lucide-react';

interface FormData {
    contract1: File | null;
    contract2: File | null;
}

interface ContractUploadSectionProps {
    formData: FormData;
    errors: { [key: string]: string };
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, field: 'contract1' | 'contract2') => void;
}

const ContractUploadSection: React.FC<ContractUploadSectionProps> = ({
                                                                         formData,
                                                                         errors,
                                                                         handleFileChange,
                                                                     }) => {
    const [isDragging1, setIsDragging1] = useState(false);
    const [isDragging2, setIsDragging2] = useState(false);

    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        field: 'contract1' | 'contract2'
    ) => {
        e.preventDefault();
        setIsDragging1(field === 'contract1' ? false : isDragging1);
        setIsDragging2(field === 'contract2' ? false : isDragging2);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            const syntheticEvent = { target: { files: [file] } } as React.ChangeEvent<HTMLInputElement>;
            handleFileChange(syntheticEvent, field);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragEnter = (field: 'contract1' | 'contract2') => {
        if (field === 'contract1') setIsDragging1(true);
        else setIsDragging2(true);
    };

    const handleDragLeave = (field: 'contract1' | 'contract2') => {
        if (field === 'contract1') setIsDragging1(false);
        else setIsDragging2(false);
    };

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <FileText className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                Contract Documents
            </h3>
            <div className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <label
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="contract1-input"
                        >
                            Contract 1 *
                        </label>
                        <div className="relative group">
                            <Info className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                            <span className="absolute hidden group-hover:block bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 text-xs rounded p-2 -top-10 left-0 w-48 z-10">
                Upload a .docx file (max 5MB) containing your primary contract details.
              </span>
                        </div>
                    </div>
                    <div
                        className={`border-2 border-dashed rounded-md p-4 text-center transition-colors animate-in slide-in-from-bottom-6 ${
                            errors.contract1 ? 'border-red-500' : isDragging1 ? 'border-teal-500 bg-teal-100 dark:bg-teal-900/30' : 'border-gray-300 dark:border-gray-600'
                        } hover:border-teal-500 dark:hover:border-teal-400`}
                        onDrop={(e) => handleDrop(e, 'contract1')}
                        onDragOver={handleDragOver}
                        onDragEnter={() => handleDragEnter('contract1')}
                        onDragLeave={() => handleDragLeave('contract1')}
                        aria-describedby="contract1-error"
                        aria-invalid={!!errors.contract1}
                        tabIndex={0}
                        aria-dropeffect="copy"
                    >
                        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                        <input
                            type="file"
                            className="w-full text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-teal-500 file:text-white file:hover:bg-teal-600 file:dark:bg-teal-400 file:dark:hover:bg-teal-300 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                            accept=".docx"
                            id="contract1-input"
                            onChange={(e) => handleFileChange(e, 'contract1')}
                            aria-label="Upload Contract 1"
                        />
                        <label htmlFor="contract1-input" className="cursor-pointer block mt-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-full">
                {formData.contract1 ? formData.contract1.name : 'Choose or drop .docx file (max 5MB)'}
              </span>
                        </label>
                    </div>
                    {errors.contract1 && (
                        <p id="contract1-error" className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.contract1}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <label
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="contract2-input"
                        >
                            Contract 2 *
                        </label>
                        <div className="relative group">
                            <Info className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                            <span className="absolute hidden group-hover:block bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 text-xs rounded p-2 -top-10 left-0 w-48 z-10">
                Upload a .docx file (max 5MB) containing your secondary contract details.
              </span>
                        </div>
                    </div>
                    <div
                        className={`border-2 border-dashed rounded-md p-4 text-center transition-colors animate-in slide-in-from-bottom-6 ${
                            errors.contract2 ? 'border-red-500' : isDragging2 ? 'border-teal-500 bg-teal-100 dark:bg-teal-900/30' : 'border-gray-300 dark:border-gray-600'
                        } hover:border-teal-500 dark:hover:border-teal-400`}
                        onDrop={(e) => handleDrop(e, 'contract2')}
                        onDragOver={handleDragOver}
                        onDragEnter={() => handleDragEnter('contract2')}
                        onDragLeave={() => handleDragLeave('contract2')}
                        aria-describedby="contract2-error"
                        aria-invalid={!!errors.contract2}
                        tabIndex={0}
                        aria-dropeffect="copy"
                    >
                        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                        <input
                            type="file"
                            className="w-full text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-teal-500 file:text-white file:hover:bg-teal-600 file:dark:bg-teal-400 file:dark:hover:bg-teal-300 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                            accept=".docx"
                            id="contract2-input"
                            onChange={(e) => handleFileChange(e, 'contract2')}
                            aria-label="Upload Contract 2"
                        />
                        <label htmlFor="contract2-input" className="cursor-pointer block mt-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-full">
                {formData.contract2 ? formData.contract2.name : 'Choose or drop .docx file (max 5MB)'}
              </span>
                        </label>
                    </div>
                    {errors.contract2 && (
                        <p id="contract2-error" className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.contract2}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractUploadSection;