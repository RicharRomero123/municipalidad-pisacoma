import React from 'react';

const Historia = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-green-700 font-bold text-2xl mb-4">Historia de Pisacoma</h1>
            <div className="flex flex-col lg:flex-row mb-4 items-center">
                <p className="text-gray-700 leading-relaxed text-justify mb-4 lg:mr-4">
                    <strong>Pisacoma</strong> es llamada también "La Tierra de Pinturas Rupestres". Se ubica al sur de la región de Puno, cerca a la frontera de la república de Bolivia. Políticamente está dividido en tres comunidades, 13 parcialidades, 3 sectores y un centro poblado. La capital del distrito se halla a 4080 m.s.n.m. Los orígenes de Pisacoma se remontan a la palabra Aymara "Pe'sacca" (ave andina llamada Perdiz) y la palabra "Uma" (Manantial de Agua), unidos estos dos vocablos significan "P'esaccauma", es decir, manantial de agua para las perdices. Con la imposición de la lengua Castellana y modificación lingüística se le conoce como Pisacoma.
                </p>
                <img src="/pisacomaciudad.webp" alt="Ciudad de Pisacoma" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4" style={{ maxWidth: '600px', maxHeight: '450px' }} />
            </div>
            <div className="flex flex-col lg:flex-row items-center mb-4">
                <p className="text-gray-700 leading-relaxed text-justify mb-4 lg:mr-4">
                    El arte rupestre de Pisacoma se halla en un proceso de destrucción y desaparición por las inclemencias climatológicas afectadas por erosión. Algunos ya desaparecieron y otros son irreconocibles, difíciles de identificar. Pisacoma es identificado como patrimonio artístico de Arte Rupestre. Se caracteriza por la diversidad de colores en sus iconografías, única a nivel nacional, comparable solo a Toquepala. En su jurisdicción existen aproximadamente veintiocho sitios entre cuevas y aleros que albergan estas representaciones.
                </p>
                <img src="/pinturarupestre1.webp" alt="Pintura Rupestre 1" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4" style={{ maxWidth: '600px', maxHeight: '450px' }} />
            </div>
            <div className="flex flex-col lg:flex-row items-center mb-4">
                <img src="/pinturarupestre2.webp" alt="Pintura Rupestre 2" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4 lg:mr-4" style={{ maxWidth: '600px', maxHeight: '450px' }} />
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                    El Arte Rupestre de Pisacoma constituye la mayor fuente de información sobre la historia del ser humano. Las investigaciones en antropología sobre el tema del Arte Rupestre en otros países occidentales han sobrepasado los cincuenta años. Sin embargo, una forma para estudiar el Arte Rupestre es en términos de su función cultural.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <p className="text-gray-700 leading-relaxed text-justify mb-4 lg:mr-4">
                    El Arte Rupestre de Pisacoma constituye la mayor fuente de información sobre la historia del ser humano el mismo que debe ser comprendido dentro de tres coordenadas: <strong>tiempo</strong>, <strong>espacio</strong> y <strong>cultura</strong>. En sus iconografías evidencian mensajes y gráficos con un sentido de vida a nivel de costumbres, organización social y proceso de desarrollo, abarcando las ideas, creencias, necesidades de sobrevivir, ambiciones y temores. Forman parte de una cosmovisión compleja cuya vitalidad sigue presente ejecutándose dentro de sus creencias, visiones del mundo y campo metafísico espiritual y religioso.
                </p>
                <img src="/pinturarupestre3.webp" alt="Pintura Rupestre 3" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4" style={{ maxWidth: '600px', maxHeight: '450px' }} />
            </div>
        </div>
    );
};

export default Historia;
