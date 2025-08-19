import React from 'react';

interface FormData {
    message: string;
}

interface MessageSectionProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageSection: React.FC<MessageSectionProps> = ({ formData, handleChange }) => {
    return (
        <div className="space-y-2">
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="message">
                Additional Message
            </label>
            <textarea
                className="flex w-full border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 rounded-md p-3 min-h-[120px]"
                name="message"
                placeholder="Any additional details about your career goals or special circumstances..."
                id="message"
                aria-describedby="message-description"
                aria-invalid={false}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleChange}
            />
        </div>
    );
};

export default MessageSection;