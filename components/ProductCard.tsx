import Image from 'next/image';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-[32px] p-5 flex flex-col justify-between w-full shadow-sm">
      <div className="bg-[#e3e8eb] rounded-[24px] w-full aspect-square mb-5 flex items-center justify-center overflow-hidden relative">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={250} 
          height={250} 
          className="object-contain mx-auto" 
          unoptimized 
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-900">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 leading-snug">
          {product.description}
        </p>
        <p className="text-base mb-4 text-gray-900">
          {product.price} ₽
        </p>
        
        <button className="mt-auto bg-[#153d63] text-white rounded-full py-2.5 px-6 text-sm w-fit hover:bg-[#0f2c49] transition-colors duration-200">
          в корзину
        </button>
      </div>
    </div>
  );
}
