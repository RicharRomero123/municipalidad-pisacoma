import HeroSlider from "@/components/ContentSection/HeroSlider/HeroSlider";
import ServiceButtons from "@/components/ContentSection/ServiceButtons/ServiceButtons";

export default function Home() {
  return (
    <section className=" w-full">
        <HeroSlider />
        <ServiceButtons/>
    </section>
  );
}
