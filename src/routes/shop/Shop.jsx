// import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

import { ProductsContext } from '../../contexts/products.context';

const Shop = () => {
    const { products } = useContext(ProductsContext);

  return (
    <div className='grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 px-[40px] py-[20px]'>
        {products.map((product) => (
              <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Shop