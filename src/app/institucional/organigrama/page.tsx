import React from 'react';

const Organigrama = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-green-700 font-bold text-2xl mb-4">Organigrama de Pisacoma</h1>
            <img 
                src="/organigrama.webp" 
                alt="Organigrama de Pisacoma" 
                className="w-full rounded-lg shadow-md"
            />
        </div>
    );
};

export default Organigrama;
