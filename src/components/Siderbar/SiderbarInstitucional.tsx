import React from 'react';
import Link from 'next/link';

const SidebarInstitucional = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-green-700 font-bold mb-4">Institucional</h2>
            <ul className="space-y-2">
                <li>
                    <Link href="/institucional/alcalde" className="text-green-700 font-bold block px-4 py-2 bg-green-100 rounded-md">
                    Alcalde
                    </Link>
                </li>
                <li>
                    <Link href="/institucional/organigrama" className="text-gray-700 block px-4 py-2 hover:bg-green-100 rounded-md">
                    Organigrama 
                    </Link>
                </li>
                <li>
                    <Link href="/institucional/concejo-municipal" className="text-gray-700 block px-4 py-2 hover:bg-green-100 rounded-md">
                    Concejo Municipal 
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarInstitucional;
