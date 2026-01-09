'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DropItem, formatPriceXOF, AVAILABILITY_LABEL_FR, TAG_LABEL_FR } from "@/lib/data/drops";

interface ProductCardProps {
  product: DropItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Toutes les images disponibles (cover + gallery)
  const allImages = [
    product.images.cover,
    ...(product.images.gallery || [])
  ];

  const handleImageHover = () => {
    if (allImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };

  const handleImageLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <Link 
      href={`/drops/${product.id}`}
      className="group block"
    >
      <div className="space-y-2 md:space-y-3">
        {/* Container Image */}
        <div 
          className="relative aspect-[3/4] overflow-hidden  rounded-sm"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <Image
            src={allImages[currentImageIndex]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Badges en haut à gauche */}
          <div className="absolute top-2 md:top-3 left-2 md:left-3 flex flex-col gap-1 md:gap-2">
            {/* Badge disponibilité */}
            {product.availability !== "en_magasin" && (
              <span className="bg-black/80 text-white text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 uppercase tracking-wide font-medium">
                {AVAILABILITY_LABEL_FR[product.availability]}
              </span>
            )}
          </div> 

          {/* Indicateur d'images multiples */}
          {allImages.length > 1 && (
            <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 flex gap-1">
              {allImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Infos produit */}
        <div className="space-y-0.5 md:space-y-1">
          <h3 className="text-[#1B4965] text-sm md:text-base font-medium tracking-tight group-hover:text-[#58B1FF] transition-colors line-clamp-2">
            {product.title}
          </h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
            <p className="text-[#1B4965] text-xs md:text-sm font-bold">
              {formatPriceXOF(product.price)}
            </p>
            
            {/* Brand optionnel */}
            {product.brand && (
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wide">
                {product.brand}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;