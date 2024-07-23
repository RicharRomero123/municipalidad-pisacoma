import React from 'react';
import { Card } from "@nextui-org/react";
import { IconType } from 'react-icons';

interface ServiceButtonProps {
    icon: IconType;
    title: string;
    description?: string;
    isLoading?: boolean;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon: Icon, title, description, isLoading = false }) => {
    return (
        <Card isHoverable isPressable className="p-4 h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center">
                <Icon className="text-blue-400 text-4xl mb-2" />
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                {description && <p className="text-gray-600">{description}</p>}
            </div>
        </Card>
    );
};

export default ServiceButton;
