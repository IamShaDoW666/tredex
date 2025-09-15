'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="relative rounded-lg h-[500px] w-full mb-4 md:mb-8">
        <Image
          src={selectedImage}
          alt="Selected product image"
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex md:ml-22 space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="relative h-24 w-24 flex-shrink-0 cursor-pointer" onClick={() => setSelectedImage(image)}>
            <Image
              src={image}
              alt={`Product image thumbnail ${index + 1}`}
              fill
              className={`object-cover rounded-md ${selectedImage === image ? 'ring-2 ring-primary' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
