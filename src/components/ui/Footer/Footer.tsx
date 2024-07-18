// components/FooterBlockItem.tsx
import React from 'react';
import FooterItem from '@/components/ContentSection/Footer/FooterItem';

interface FooterItemProps {
    text: string;
    link: string;
}

interface FooterBlockItemProps {
    title: string;
    items: FooterItemProps[];
}

const FooterBlockItem: React.FC<FooterBlockItemProps> = ({ title, items }) => {
    return (
        <div className="space-y-6">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h1>
            <ul className="space-y-3">
                {items.map((item) => (
                    <FooterItem key={item.text} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default FooterBlockItem;
