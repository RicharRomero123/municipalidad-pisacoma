import React from 'react';
import ServiceButton from '@/components/Buttons/ServiceButton/ServiceButton';
import { FaIdCard, FaRegAddressCard, FaCheck, FaFileAlt, FaHammer, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
    icon: IconType;
    title: string;
    description?: string;
}

const services: Service[] = [
    { icon: FaIdCard, title: 'LICENCIAS DE FUNCIONAMIENTO' },
    { icon: FaRegAddressCard, title: 'REGISTRO CIVIL' },
    { icon: FaCheck, title: 'TRIBUTOS MUNICIPALES' },
    { icon: FaFileAlt, title: 'TUPA', description: 'Texto Único de Procedimientos Administrativos' },
    { icon: FaHammer, title: 'ORDENANZAS MUNICIPALES' },
    { icon: FaUsers, title: 'CONVOCATORIAS', description: 'Procesos CAS/CAP Suplencias' },
];

const ServiceButtons: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {services.map((service, index) => (
                <ServiceButton
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default ServiceButtons;
