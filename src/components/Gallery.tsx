import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryPhoto {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}

interface GalleryProps {
  photos: readonly GalleryPhoto[];
}

export function Gallery({ photos }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
      {photos.map((photo, i) => {
        const fit = photo.fit ?? "cover";
        const isFeatured = i === 0;

        return (
          <figure
            key={photo.src}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-rink-400/35 hover:shadow-2xl hover:shadow-rink-500/15",
              isFeatured &&
                "col-span-2 max-md:row-span-1 md:col-span-2 md:row-span-2 md:border-rink-400/20 md:ring-2 md:ring-rink-400/25",
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden",
                isFeatured
                  ? "aspect-[4/3] md:aspect-square"
                  : "aspect-square",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={cn(
                  "transition-transform duration-700 ease-out group-hover:scale-[1.06]",
                  fit === "contain"
                    ? "object-contain p-3 sm:p-4"
                    : "object-cover object-center",
                )}
                sizes={
                  isFeatured
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-arena/80 via-arena/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              {isFeatured && (
                <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-gold/30 bg-arena/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
                  Featured
                </div>
              )}
            </div>
          </figure>
        );
      })}
    </div>
  );
}
