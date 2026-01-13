import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      {/* Sección Hero con fondo gris/ghost */}
      <Background className="bg-gradient-to-b from-background via-muted to-muted/80">
        <Hero />
        <Logos />
        <Features />
        <ResourceAllocation />
      </Background>

      {/* Sección Testimonios */}
      <Testimonials />

      {/* Sección Final (Pricing + FAQ) con fondo degradado */}
      <Background variant="bottom" className="bg-gradient-to-t from-background to-muted/50 pb-20">
        <Pricing />
        <FAQ />
      </Background>
    </>
  );
}
