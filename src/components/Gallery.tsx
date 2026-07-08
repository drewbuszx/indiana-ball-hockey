import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryProps {
  photos: readonly GalleryPhoto[];
}

export function Gallery({ photos }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
      {photos.map((photo, i) => (
        <figure
          key={photo.src}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated",
            i === 0 && "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
          )}
        >
          <div className={cn("relative", i === 0 ? "aspect-square" : "aspect-square")}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-arena/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </figure>
      ))}
    </div>
  );
}
