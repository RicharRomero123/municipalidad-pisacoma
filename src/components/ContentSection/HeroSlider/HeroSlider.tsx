"use client"
import React from 'react';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full">
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <CImage className="d-block w-full h-[36rem] object-cover" src="/pisacomaSlider2.webp" alt="Diapositiva 1" />
          <CCarouselCaption className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-4xl font-bold uppercase text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Pisacoma Aniversario
            </h5>
            <p className="text-lg font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Pisacoma celebra su aniversario con diversas actividades culturales y festivas.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600">
              Descubre más
            </button>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-full h-[36rem] object-cover" src="/pisacomaSlider3.webp" alt="Diapositiva 2" />
          <CCarouselCaption className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-4xl font-bold uppercase text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Ciudad de Pisacoma
            </h5>
            <p className="text-lg font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Explora la belleza y la riqueza cultural de la ciudad de Pisacoma.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600">
              Descubre más
            </button>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-full h-[36rem] object-cover" src="/pisacomaSlider2.webp" alt="Diapositiva 3" />
          <CCarouselCaption className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-4xl font-bold uppercase text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Patrimonio Cultural
            </h5>
            <p className="text-lg font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Descubre el patrimonio cultural y los sitios históricos de Pisacoma.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600">
              Descubre más
            </button>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default HeroSlider;
