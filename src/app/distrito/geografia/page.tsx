import React from 'react';

const Geografia = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 ">
            <h1 className="text-green-700 font-bold text-2xl mb-4">Geografía de Pisacoma</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
                Pisacoma es llamada también "La Tierra de Pinturas Rupestres". Se ubica al sur de la región de Puno, cerca a la frontera de la república de Bolivia. Políticamente está dividido en tres comunidades, 13 parcialidades, 3 sectores y un centro poblado. La capital del distrito se halla a 4080 m.s.n.m.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                El clima en el distrito de Pisacoma tiene un comportamiento muy irregular, con una temperatura máxima de 11.2°C, su humedad fluctúa alrededor de 44.9% (meses diciembre a marzo), y su temperatura mínima es de -8.7°C. Se caracteriza por tener recursos hídricos formados desde las cordilleras Huallatauqui y Santo Domingo de Llallagua. Entre los principales tenemos el Río Sura, Kakingurani, Quispine, y Collpajavira, afluentes del Río Chambalaya Arriba, que en los meses de sequía mantiene un caudal de aproximadamente 200 L/s.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Límites</h2>
            <ul className="text-gray-700 leading-relaxed mb-4 list-disc pl-6">
                <li><strong>Por el Norte:</strong> Con el Distrito de Huacullani y Kelluyo.</li>
                <li><strong>Por el Sur:</strong> Con el Distrito de Copaso.</li>
                <li><strong>Por el Este:</strong> Con la Hermana República de Bolivia.</li>
                <li><strong>Por el Oeste:</strong> Con el Distrito de Santa Rosa y Copaso.</li>
            </ul>
            <div className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14533.89154407558!2d-69.38472426339115!3d-16.90637571956525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915c743144f4a3bb%3A0xffc19dfd40710748!2sPizacoma!5e1!3m2!1ses-419!2spe!4v1720927503310!5m2!1ses-419!2spe"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Geografia;
