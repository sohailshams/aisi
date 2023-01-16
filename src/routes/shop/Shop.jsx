import { Routes, Route } from "react-router-dom";
import CategoriesContainer from "../categories-container/CategoriesContainer";
import CategoryDetail from "../category-detail/CategoryDetail";


const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesContainer />} />
      <Route path=":categoryName" element={<CategoryDetail />} />
    </Routes>
  );
};

export default Shop;