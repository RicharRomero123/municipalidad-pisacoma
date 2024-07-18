import React from 'react';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from "next/link";
const TopBar = () => {
    const getCurrentDate = () => {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="bg-red-800 text-white py-2">
            <div className="hidden sm:flex justify-between items-center px-6 max-w-5xl mx-auto">
                <div className="flex-1 text-left text-xs font-bold">
                    {`Pisacoma, ${getCurrentDate()}`}
                </div>
                <div className="flex-1 text-center text-xs font-bold flex items-center justify-center space-x-2">
                    <FaEnvelope className="text-lg" />
                    <Link href="mailto:mesadepartesvirtual@munipisacoma.gob.pe">
                        mesadepartesvirtual@munipisacoma.gob.pe
                    </Link>
                </div>
                <div className="flex-1 text-right flex justify-end space-x-4">
                    <Link href="https://wa.me/your-whatsapp-number" className="text-white text-2xl">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61555683550086&ref=embed_page" className="text-white text-2xl">
                        <FaFacebook />
                    </Link>
                </div>
            </div>
            <div className="flex sm:hidden justify-between items-center px-6">
                <Link href="mailto:mesadepartesvirtual@munipisacoma.gob.pe" className="text-white text-3xl">
                    <FaEnvelope />
                </Link>
                <Link href="https://wa.me/your-whatsapp-number" className="text-white text-3xl">
                    <FaWhatsapp />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61555683550086&ref=embed_page" className="text-white text-3xl">
                    <FaFacebook />
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
