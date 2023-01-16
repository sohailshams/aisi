import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";


const CategoryContainer = ({title, products}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold pl-8 ml-2 my-4'>
          <Link to={title}>
            {title.toUpperCase()}
          </Link>
          </h2>
        <div className='grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 px-[40px] py-[20px] mb-10'>
            {
                products.filter((_, index ) => index < 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default CategoryContainer;