// components/Footer.tsx

import { Link, Spacer } from "@nextui-org/react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem 0', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/Huacullani.png" alt="Municipalidad de Huacullani" style={{ height: '50px', marginRight: '1rem' }} />
          <div style={{ textAlign: 'left' }}>
            <strong>Municipalidad de Huacullani</strong>
            <p style={{ fontSize: '12px', margin: 0 }}>
              &copy; 2024 Municipalidad de Huacullani. Todos los derechos reservados.
            </p>
            <p style={{ fontSize: '12px', margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaPhoneAlt style={{ marginRight: '0.5rem' }} />
              +51 945 234 456
            </p>
            <p style={{ fontSize: '12px', margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaEnvelope style={{ marginRight: '0.5rem' }} />
              huacullani@gob.pe
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/portaltrasparencia.webp" alt="Portal de Transparencia" style={{ height: '50px', marginLeft: '1rem' }} />
          <Spacer x={1} />
          <Link href="https://www.facebook.com/MunicipalidadDistritalHuacullani" target="_blank" rel="noopener noreferrer">
            <FaFacebookF style={{ height: '30px', width: '30px', marginLeft: '1rem', color: '#4267B2' }} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
