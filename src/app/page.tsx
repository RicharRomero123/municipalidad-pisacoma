import HeroSlider from "@/components/ContentSection/HeroSlider/HeroSlider";
import ServiceButtons from "@/components/ContentSection/ServiceButtons/ServiceButtons";

export default function Home() {
  return (
    <section className="w-full lg:flex min-h-screen">
      <div className="w-full h-screen mt-28">  {/* Clase para ocupar toda la pantalla */}
        <HeroSlider />
        <ServiceButtons/>
      </div>
    </section>
  );
}
