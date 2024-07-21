import RedesPageFollow from '@/components/ContentSection/Redes/RedesPageFollow';
import SidebarInstitucional from '@/components/Siderbar/SiderbarInstitucional';
import React from 'react';

export default function MunicipalidadLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
       <div className="mt-4 flex flex-col md:flex-row max-w-7xl mx-auto  px-4 space-y-4 md:space-y-0 md:space-x-4">
               <div className="w-full md:w-3/4">
                    {children}
                </div>
                <div className="w-full md:w-1/4">
                    <SidebarInstitucional/>
                    <RedesPageFollow/>
                </div>
                
            </div>
    );
  }
