// import SHOP_DATA from '../../shop-data.json';
import { useContext, Fragment } from 'react';
import CategoryContainer from '../../components/category-container/CategoryContainer';

import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesContainer = () => {
    const { categoriesMap } = useContext(CategoriesContext);

  return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          // Get products from the categoriesMap
          const products = categoriesMap[title];

          return (
            <CategoryContainer key={title} title={title} products={products} />
          )
        })}
      </Fragment>
  );
};

export default CategoriesContainer;