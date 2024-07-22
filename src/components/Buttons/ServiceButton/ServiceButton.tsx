// components/ServiceButton.tsx
import React from 'react';
import { Card, Button } from "@nextui-org/react";
import { IconType } from 'react-icons';

interface ServiceButtonProps {
    icon: IconType;
    title: string;
    description?: string;
    isLoading?: boolean;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon: Icon, title, description, isLoading = false }) => {
    return (
        <Card isHoverable isPressable className="p-4">
            <div className="flex flex-col items-center">
                <Icon className="text-blue-500 text-4xl mb-2" />
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                {description && <p className="text-gray-600 mb-4">{description}</p>}
                <Button size="sm" isLoading={isLoading}>
                    {isLoading ? 'Loading...' : 'Learn More'}
                </Button>
            </div>
        </Card>
    );
};

export default ServiceButton;
