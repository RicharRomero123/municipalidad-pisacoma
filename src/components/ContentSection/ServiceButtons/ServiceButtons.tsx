// components/ServiceButtons.tsx
import React from 'react';
import ServiceButton from '@/components/Buttons/ServiceButton/ServiceButton';
import { FaLaptopCode, FaIdCard, FaRegAddressCard, FaCheck, FaFileAlt, FaHammer, FaBook, FaUsers } from 'react-icons/fa';

interface Service {
    icon: React.ElementType;
    title: string;
    description?: string;
}

const services: Service[] = [
    { icon: FaLaptopCode, title: 'MESA DE PARTES VIRTUAL' },
    { icon: FaIdCard, title: 'LICENCIAS DE FUNCIONAMIENTO' },
    { icon: FaRegAddressCard, title: 'REGISTRO CIVIL' },
    { icon: FaCheck, title: 'TRIBUTOS MUNICIPALES' },
    { icon: FaFileAlt, title: 'TUPA', description: 'Texto Único de Procedimientos Administrativos' },
    { icon: FaHammer, title: 'ORDENANZAS MUNICIPALES' },
    { icon: FaBook, title: 'LIBRO DE RECLAMACIONES' },
    { icon: FaUsers, title: 'CONVOCATORIAS', description: 'Procesos CAS/CAP Suplencias' },
];

const ServiceButtons: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {services.map((service, index) => (
                <ServiceButton key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
        </div>
    );
};

export default ServiceButtons;
