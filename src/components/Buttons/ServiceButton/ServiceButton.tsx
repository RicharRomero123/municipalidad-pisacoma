// components/ServiceButton.tsx
import React from 'react';

interface ServiceButtonProps {
    icon: React.ElementType;
    title: string;
    description?: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-green-600 text-white p-4 rounded-lg flex items-center space-x-4 hover:bg-green-700 transition duration-300">
            <Icon className="text-4xl sm:text-5xl lg:text-6xl" />
            <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">{title}</h3>
                {description && <p className="text-xs sm:text-sm lg:text-sm">{description}</p>}
            </div>
        </div>
    );
};

export default ServiceButton;
