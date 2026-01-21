import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Easily upload your product images and let our AI generate captivating marketing content in seconds.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'AI-Powered Creation',
        desc: 'Our AI instantly transforms your product images into engaging marketing content, saving you time and effort.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Ready-to-Use Videos',
        desc: 'Receive high-quality marketing videos optimized for social media and advertising platforms, ready to boost your campaigns.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: 'Free',
        desc: 'Try out our services with this basic plan',
        credits: 25,
        features: [
            '25',
            'Standard quality videos',
            'No watermarks',
            'Basic support',
            'Access to community forum'
        ]
    },
    {
        id: 'pro',
        name: 'pro',
        price: '₹499',
        desc: 'Creator plan for individuals and small teams.',
        credits: 100,
        features: [
            '100',
            'High quality videos',
            'No watermarks',
            'Video generation priority',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '₹1499',
        desc: 'Agency plan for businesses and large teams.',
        credits: 350,
        features: [
            '350',
            'Premium quality videos',
            'No watermarks',
            'Highest generation priority',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does your AI video generation work?',
        answer: 'Our AI analyzes your product images and uses advanced algorithms to create engaging marketing videos tailored to your brand and audience.'
    },
    {
        question: 'What types of videos can I create?',
        answer: 'You can create a variety of marketing videos, including promotional clips, social media ads, and product showcases, all optimized for different platforms.'
    },
    {
        question: 'What file formats do you support for uploads?',
        answer: 'We support common image formats such as JPEG, PNG, and BMP for uploads.'
    },
    {
        question: 'Do i own the rights to the videos created?',
        answer: 'Yes, you retain full ownership and rights to all videos created using our platform.'
    },
    {
        question: 'can I upgrade or downgrade my subscription plan?',
        answer: 'Yes, you can easily upgrade or downgrade your subscription plan at any time through your account settings.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Instagram", url: "https://www.instagram.com/tech_soumyadeep/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/soumyadeep-mondal-a47b50293" },
            { name: "GitHub", url: "https://github.com/Dope04" }
        ]
    }
];