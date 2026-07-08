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
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
      {photos.map((photo, i) => {
        const fit = photo.fit ?? "cover";
        return (
          <figure
            key={photo.src}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated",
              i === 0 && "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
            )}
          >
            <div className="relative aspect-square">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={cn(
                  "transition-transform duration-500 group-hover:scale-105",
                  fit === "contain"
                    ? "object-contain p-3 sm:p-4"
                    : "object-cover",
                )}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 280px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arena/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </figure>
        );
      })}
    </div>
  );
}
