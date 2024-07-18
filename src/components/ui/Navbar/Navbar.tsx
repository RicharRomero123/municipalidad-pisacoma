"use client";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaPlus, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import TopBar from "@/components/ui/Topbar/Topbar";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>({});
    const timeoutRef = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

    const toggleMenu = () => setOpenMenu(!openMenu);
    const toggleSubMenu = (menu: string, state?: boolean) => {
        setOpenSubMenu(prevState => ({
            ...prevState,
            [menu]: state !== undefined ? state : !prevState[menu]
        }));
    };

    const handleMouseEnter = (menu: string) => {
        if (timeoutRef.current[menu]) {
            clearTimeout(timeoutRef.current[menu]!);
            timeoutRef.current[menu] = null;
        }
        toggleSubMenu(menu, true);
    };

    const handleMouseLeave = (menu: string) => {
        timeoutRef.current[menu] = setTimeout(() => {
            toggleSubMenu(menu, false);
        }, 300);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
                  <TopBar/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-24">
                    <div className="flex items-center justify-between w-full lg:hidden">
                        <img
                            className="h-12 w-auto sm:h-14 md:h-16"
                            src="/pisacoma.webp"
                            alt="Logo Pisacoma"
                        />
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {openMenu ? (
                                <FaTimes className="block h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" aria-hidden="true" />
                            ) : (
                                <svg
                                    className="block h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                        <Link href="http://example.com">
                            <img
                                className="h-12 w-auto sm:h-12 md:h-14"
                                src="/portaltransparencia.webp"
                                alt="Portal de Transparencia"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0">
                            <motion.img
                                whileHover={{ x: 10 }}
                                className="h-20 w-auto"
                                src="/pisacoma.webp"
                                alt="Logo"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 items-center">
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter('menu1')}
                                    onMouseLeave={() => handleMouseLeave('menu1')}
                                >
                                    <button
                                        className="text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                                        onMouseEnter={() => handleMouseEnter('menu1')}
                                    >
                                        Nuestro Distrito
                                        <FaChevronDown className="ml-1" />
                                    </button>
                                    {openSubMenu['menu1'] && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 mt-2 w-48 bg-white shadow-lg"
                                            onMouseEnter={() => handleMouseEnter('menu1')}
                                            onMouseLeave={() => handleMouseLeave('menu1')}
                                        >
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Historia
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Geografía
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Turismo
                                            </a>
                                        </motion.div>
                                    )}
                                </div>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Institucional
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Servicios
                                </a>
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter('menu2')}
                                    onMouseLeave={() => handleMouseLeave('menu2')}
                                >
                                    <button
                                        className="text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                                        onMouseEnter={() => handleMouseEnter('menu2')}
                                    >
                                        Transparencia
                                        <FaChevronDown className="ml-1" />
                                    </button>
                                    {openSubMenu['menu2'] && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 mt-2 w-48 bg-white shadow-lg"
                                            onMouseEnter={() => handleMouseEnter('menu2')}
                                            onMouseLeave={() => handleMouseLeave('menu2')}
                                        >
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Normas Municipales
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Ordenanza Municipal
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Resoluciones de Concejo
                                            </a>
                                        </motion.div>
                                    )}
                                </div>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Notas de prensa
                                </a>
                                <Link href="http://example.com">
                                    <motion.img
                                        whileHover={{ x: 10 }}
                                        className="h-16 w-auto"
                                        src="/portaltransparencia.webp"
                                        alt="Portal de Transparencia"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openMenu && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="#"
                            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Inicio
                        </a>
                        <div className="relative">
                            <button
                                onClick={() => toggleSubMenu('menu1')}
                                className="w-full flex justify-between items-center text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Nuestro Distrito
                                <FaPlus />
                            </button>
                            {openSubMenu['menu1'] && (
                                <div className="pl-4">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Historia
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Geografía
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Turismo
                                    </a>
                                </div>
                            )}
                        </div>
                        <a
                            href="#"
                            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Institucional
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Servicios
                        </a>
                        <div className="relative">
                            <button
                                onClick={() => toggleSubMenu('menu2')}
                                className="w-full flex justify-between items-center text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Transparencia
                                <FaPlus />
                            </button>
                            {openSubMenu['menu2'] && (
                                <div className="pl-4">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Normas Municipales
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Ordenanza Municipal
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Resoluciones de Concejo
                                    </a>
                                </div>
                            )}
                        </div>
                        <a
                            href="#"
                            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Notas de prensa
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
