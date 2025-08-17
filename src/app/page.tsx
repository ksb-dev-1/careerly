// components
import Heading from "@/components/home/Heading";
import FeatureSection from "@/components/home/FeatureSection";
import FAQ from "@/components/home/FAQ";
import FloatingIcons from "@/components/home/FloatingIcons";

export default function HomePage() {
  return (
    <div>
      <section className="relative h-[calc(100vh-128px)] mt-16 overflow-hidden">
        <Heading />
        <FloatingIcons />
      </section>
      <section className="border-y py-16">
        <FeatureSection />
      </section>
      <section className="py-16">
        <FAQ />
      </section>
    </div>
  );
}
