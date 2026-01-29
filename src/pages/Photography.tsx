import { useState } from "react";

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Mountain Sunrise",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      title: "Misty Forest",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800",
      title: "Forest Path",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      title: "Waterfall",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      title: "Mountain Valley",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
      title: "Lake Reflection",
    },
  ];

  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Photography</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Capturing moments through my lens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-primary-foreground font-medium p-4">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </main>
  );
}
