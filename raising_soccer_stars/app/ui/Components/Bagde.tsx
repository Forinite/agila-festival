// src/components/Badge.jsx
import React from 'react';


const Badge = ({ text, isFeatured = false }) => {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                isFeatured
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600'
            }`}
        >
      {text}
    </span>
    );
};

export default Badge;