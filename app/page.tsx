import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcecee] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Сетка товаров: 1 колонка на мобильных, 2 на планшетах, 4 на десктопе */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Кнопка "Смотреть всю коллекцию" */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#153d63] text-white rounded-full py-4 px-12 text-sm tracking-widest uppercase hover:bg-[#0f2c49] transition-colors duration-200 w-full sm:w-auto">
            Смотреть всю коллекцию
          </button>
        </div>

      </div>
    </main>
  );
}
