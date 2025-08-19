// app/ui/Components/Newsletter.tsx
'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface NewsletterProps {
    title?: string;
    description?: string;
}

interface FormData {
    email: string;
}

const Newsletter = ({
                        title = 'Stay Connected',
                        description = 'Subscribe to our newsletter for the latest insights, player stories, and industry updates delivered directly to your inbox.',
                    }: NewsletterProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('Newsletter subscription:', data); // Replace with API call
    };

    return (
        <section className="rounded-lg bg-gradient-card shadow-card border-0 mt-16" aria-labelledby="newsletter-title">
            <div className="p-6">
                <h3
                    id="newsletter-title"
                    className="text-2xl md:text-3xl font-bold text-teal-500 text-center"
                >
                    {title}
                </h3>
            </div>
            <div className="p-6 pt-0 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">{description}</p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                    noValidate
                >
                    <div className="flex-1">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="text-red-500 text-sm mt-1 text-left">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-gradient-primary hover:text-white text-teal-500 rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                        aria-label="Subscribe to newsletter"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;