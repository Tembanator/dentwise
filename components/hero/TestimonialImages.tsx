import Image from "next/image";
import React from "react";
const images = [
  {
    id: 101,
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    alt: "Profile photo for Sarah Chen",
  },
  {
    id: 102,
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    alt: "Profile photo for David Miller",
  },
  {
    id: 103,
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    alt: "Profile photo for Jessica Kim",
  },
  {
    id: 104,
    url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
    alt: "Profile photo for Marcus Johnson",
  },
  {
    id: 105,
    url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
    alt: "Profile photo for Aisha Khan",
  },
];
export default function TestimonialImages() {
  return (
    <div className="flex -space-x-2">
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.alt}
          width={28}
          height={28}
          className="w-8 h-8 rounded-full object-cover ring-2 ring-background"
        />
      ))}
    </div>
  );
}
