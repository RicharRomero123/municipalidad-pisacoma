import React from 'react';

const ConcejoMunicipal = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 min-h-[90vh]">
            <h1 className="text-green-700 font-bold text-2xl mb-4 text-center">Concejo Municipal de Huacullani</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img 
                        src="https://res.cloudinary.com/daassyisd/image/upload/v1723240148/tkvvauo8fh4ljgbwxf7y.jpg" 
                        alt="Persona 1" 
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img 
                        src="https://res.cloudinary.com/daassyisd/image/upload/v1723240219/hgzfftuee9usrc25mbau.jpg" 
                        alt="Persona 2" 
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img 
                        src="https://res.cloudinary.com/daassyisd/image/upload/v1723240205/u3iogoyiqyfwtt9revby.jpg" 
                        alt="Persona 3" 
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Card 4 */}
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img 
                        src="https://res.cloudinary.com/daassyisd/image/upload/v1723240188/ztko1fel81iybvshpi0k.jpg" 
                        alt="Persona 4" 
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Card 5 */}
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img 
                        src="https://res.cloudinary.com/daassyisd/image/upload/v1723240177/fj5tiioahhcwbsjw9jwr.jpg" 
                        alt="Persona 5" 
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ConcejoMunicipal;
