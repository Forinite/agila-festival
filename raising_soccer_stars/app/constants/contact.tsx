//app/constants/contact.tsx

export const CONTACT_INFO = {
    title: 'Get In Touch',
    description: 'Whether you\'re a player looking for representation, a club seeking talent, or a partner interested in collaboration, we\'d love to hear from you.',
    emails: [
        { label: 'General Inquiries', email: 'info@absolutetrust.ng' },
        { label: 'Player Representation', email: 'players@absolutetrust.ng' },
        { label: 'Club Partnerships', email: 'clubs@absolutetrust.ng' },
        { label: 'Media Inquiries', email: 'media@absolutetrust.ng' },
    ],
};

export const BUSINESS_HOURS = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

export const OFFICES = [
    {
        title: 'Lagos Office',
        details: ['123 Victoria Island', 'Lagos, Nigeria', '+234 801 234 5678', 'lagos@absolutetrust.ng'],
    },
    {
        title: 'Abuja Office',
        details: ['456 Central Business District', 'Abuja, Nigeria', '+234 802 345 6789', 'abuja@absolutetrust.ng'],
    },
    {
        title: 'European Office',
        details: ['789 Football District', 'Madrid, Spain', '+34 911 234 567', 'europe@absolutetrust.ng'],
    },
];

export const EMERGENCY_CONTACT = {
    title: '24/7 Emergency Contact',
    description: 'For urgent matters requiring immediate attention, our emergency hotline is available 24/7 for all represented players.',
    phone: '+234 800 ABSOLUTE',
    phoneNumeric: '(+234 800 227 6588)',
};