'use client'; // Indique à next.js que c'est un composant client

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
      <div className="space-y-3">
        {/* Container Image */}
        <div 
          className="relative aspect-[3/4] overflow-hidden bg-[#58B1FF] rounded-sm"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <Image
            src={allImages[currentImageIndex]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges en haut à gauche */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {/* Badge disponibilité */}
            {product.availability !== "en_magasin" && (
              <span className="bg-black/80 text-white text-xs px-3 py-1 uppercase tracking-wide font-medium">
                {AVAILABILITY_LABEL_FR[product.availability]}
              </span>
            )}

            {/* Tags */}
            {/* {product.tags?.map((tag) => (
              <span 
                key={tag}
                className="bg-white/90 text-black text-xs px-3 py-1 uppercase tracking-wide font-medium"
              >
                {TAG_LABEL_FR[tag]}
              </span>
            ))} */}
          </div> 

          {/* Indicateur d'images multiples */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 right-3 flex gap-1">
              {allImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Infos produit */}
        <div className="space-y-1">
          <h3 className="text-[#1B4965] text-base font-medium tracking-tight group-hover:text-[#58B1FF] transition-colors">
            {product.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <p className="text-[#1B4965] text-sm font-bold">
              {formatPriceXOF(product.price)}
            </p>
            
            {/* Brand optionnel */}
            {product.brand && (
              <p className="text-gray-500 text-xs uppercase tracking-wide">
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