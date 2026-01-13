import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      
      {/* CAPA DE FONDO (Restaurada): Se posiciona detrás de todo, incluso del Header */}
      <div className="absolute top-0 left-0 right-0 h-[800px] -z-10 bg-gradient-to-b from-background via-muted to-muted/80" />

      {/* Contenido Principal */}
      <div className="w-full">
        <Hero />
        <Logos />
        <Features />
        <ResourceAllocation />
      </div>

      {/* Sección Testimonios (Fondo limpio por defecto) */}
      <Testimonials />

      {/* Sección Final (Pricing + FAQ) con su propio fondo */}
      <div className="w-full bg-gradient-to-t from-background to-muted/50 pb-20">
        <Pricing />
        <FAQ />
      </div>
    </div>
  );
}
