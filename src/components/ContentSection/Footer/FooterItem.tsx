// components/FooterItem.tsx
import React from 'react';
import Link from 'next/link';

interface FooterItemProps {
    text: string;
    link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text, link }) => {
    return (
        <li>
            <Link href={link}>
                <a className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
                    {text}
                </a>
            </Link>
        </li>
    );
};

export default FooterItem;
