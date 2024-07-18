import { BentoGridDemo } from '@/components/ContentSection/ContentSectionDistrito/ContentSectionTurismo';
import React from 'react';

const Turismo = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 ">
            <h1 className="text-green-700 font-bold text-2xl mb-4">Turismo de Kelluyo</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
                Ubicado en el distrito de Kelluyo región de Puno. Las chullpas de Chiarakue son muy similares a las chullpas de Sillustani y Cutimbo, construida de piedra por el acoplamiento geométrico. Hasta ahora no hay mucha información de estos lugares sin embargo representa lo más profundo de Puno y una oportunidad para los exploradores y el turismo cultural y arqueológico.
            </p>
            <BentoGridDemo/>
            <div className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14533.89154407558!2d-69.38472426339115!3d-16.90637571956525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915c743144f4a3bb%3A0xffc19dfd40710748!2sPizacoma!5e1!3m2!1ses-419!2spe!4v1720927503310!5m2!1ses-419!2spe"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    );
};

export default Turismo;
