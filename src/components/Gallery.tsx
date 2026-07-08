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
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
      {photos.map((photo, i) => {
        const fit = photo.fit ?? "cover";
        const isFeatured = i === 0;

        return (
          <figure
            key={photo.src}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated ring-1 ring-white/5 transition-all duration-300 hover:ring-rink-400/30",
              isFeatured &&
                "col-span-2 max-md:row-span-1 md:col-span-2 md:row-span-2 md:ring-2 md:ring-rink-400/20",
            )}
          >
            <div
              className={cn(
                "relative",
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
                  "transition-transform duration-500 group-hover:scale-105",
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-arena/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </figure>
        );
      })}
    </div>
  );
}
