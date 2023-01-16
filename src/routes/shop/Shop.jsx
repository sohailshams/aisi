// import SHOP_DATA from '../../shop-data.json';
import { useContext, Fragment } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

import { CategoriesContext } from '../../contexts/categories.context';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

  return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            <h2 className='text-2xl font-bold pl-8 ml-2 my-4'>{title.toUpperCase()}</h2>
            <div className='grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 px-[40px] py-[20px]'>
                {categoriesMap[title].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </Fragment>
        ))}
      </Fragment>
  );
};

export default Shop;