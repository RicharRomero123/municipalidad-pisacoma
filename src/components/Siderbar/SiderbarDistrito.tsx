import React from 'react';
import Link from 'next/link';

const SidebarDistrito = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-green-700 font-bold mb-4">Nuestro Distrito</h2>
            <ul className="space-y-2">
                <li>
                    <Link href="/distrito/historia" className="text-blue-500 font-bold block px-4 py-2 hover:bg-blue-100 rounded-md">
                        Historia de Huacullani 
                    </Link>
                </li>
                <li>
                    <Link href="/distrito/geografia" className="text-gray-700 block px-4 py-2 hover:bg-blue-100 rounded-md">
                        Geografía
                    </Link>
                </li>
                <li>
                    <Link href="/distrito/turismo" className="text-gray-700 block px-4 py-2 hover:bg-blue-100 rounded-md">
                        Turismo de Huacullani 
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarDistrito;
