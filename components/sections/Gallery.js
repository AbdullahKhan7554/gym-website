"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY } from "@/lib/data";
import { scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Iron Elite"
          description="A look at the floor, the energy and the community that makes Iron Elite Lahore's home of serious training."
          className="mb-14"
        />
      </div>

      {/* Infinite horizontal marquee — full-bleed */}
      <div className="group relative mb-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {[...GALLERY, ...GALLERY].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-44 w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-56 sm:w-96"
            >
              <Image
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes="384px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4"
        >
          {GALLERY.map((src, i) => (
            <motion.figure
              key={src}
              variants={scaleIn}
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={src}
                alt={`Iron Elite gym interior and members training, view ${i + 1}`}
                width={600}
                height={i % 3 === 0 ? 800 : 600}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/10" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
