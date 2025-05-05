import Image from "next/image";

const images = [
  "/projects/noturar/001.webp", // top left
  "/projects/noturar/002.webp", // top center
  "/projects/noturar/003.webp", // top right
  "/projects/noturar/004.webp", // middle left
  "/projects/noturar/005.webp", // middle center (large)
  "/projects/noturar/006.webp", // middle right
  "/projects/noturar/007.webp", // bottom left
  "/projects/noturar/008.webp", // bottom center
  "/projects/noturar/009.webp", // bottom right
];

export default function ProjectsGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start justify-center w-full px-4">
      {/* Text side */}
      <div className="md:w-1/3 w-full text-left">
        <h2 className="text-2xl md:text-3xl font-medium text-primary">
          Проекты созданные <br /> нашими архитекторами
        </h2>
      </div>

      {/* Grid side */}
      <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 md:w-2/3">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`relative ${
              idx === 4 ? "row-span-2 col-span-2" : "aspect-square"
            }`}
          >
            <Image
              src={src}
              alt={`Project image ${idx + 1}`}
              fill
              className="object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
