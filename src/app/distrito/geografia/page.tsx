import React from 'react';

const Geografia = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 min-h-[90vh]">
            <h1 className="text-blue-500 font-bold text-2xl mb-4">Geografía de Huacullani</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
                Se encuentra ubicado en la región Suni, a 16° 37′ 50″ de latitud sur y 69° 9′ 20″ de longitud oeste del meridiano de Greenwich y a 3940 m s. n. m. (metros sobre el nivel del mar).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                Está situado en el oeste de la provincia, linda al norte con los distritos de Juli y de Pomata; al sur con el de Pisacoma; al este con los de Zepita y de Kelluyo; y al oeste con los de Conduriri y Santa Rosa, ambos en la vecina Provincia de El Collao.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-2">Demografía</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                La población estimada en el año 2000 es de 5952 habitantes.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-2">Capital</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                La capital del distrito es la ciudad de Huacullani ubicada sobre los 3910 m s. n. m. (metros sobre el nivel del mar).
            </p>
            <div className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7277.529659601396!2d-69.3255073118356!3d-16.62962576831039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915c6ae5aef63221%3A0xfc8423deabb8d194!2sHuacullani!5e1!3m2!1ses-419!2spe!4v1721749794241!5m2!1ses-419!2spe"
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
