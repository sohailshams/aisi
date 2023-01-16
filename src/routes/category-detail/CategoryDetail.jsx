import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/categories.context";

const CategoryDetail = () => {
    // Get category pram
    const { categoryName } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProdects] = useState([]);

    useEffect(() => {
        setProdects(categoriesMap[categoryName])
    }, [categoryName, categoriesMap])

  return (
    <Fragment>
      <h1 className='text-2xl font-bold pl-8 ml-2 my-4'>{categoryName.toUpperCase()}</h1>
      <div className='grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 px-[40px] py-[20px] mb-10'>
          {
            products?.map((product) => <ProductCard key={product.id} product={product} />)
          }
      </div>
    </Fragment>
  )
}

export default CategoryDetail;