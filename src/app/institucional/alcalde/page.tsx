import React from 'react';

const Alcalde = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 min-h-[90vh]">
            <h1 className="text-green-700 font-bold text-2xl mb-4">Alcalde de Pisacoma</h1>
            <img 
                src="/alcalde.webp" 
                alt="Alcalde de Pisacoma" 
                className="w-full rounded-lg shadow-md"
            />
        </div>
    );
};

export default Alcalde;
