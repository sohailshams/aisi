import { useNavigate } from "react-router-dom";

const Category = ({category}) => {
    const {name, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

  return (
    <div className="flex flex-auto h-60 w-[30%] justify-center border-2 border-black items-center mx-4 my-1.5 overflow-hidden cursor-pointer" onClick={onNavigateHandler}>
          <div className="w-full h-full grid place-items-center hover:-translate-y-1 hover:scale-110 duration-[2000ms]" style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
          }}>
            <div className="border-2 border-black px-6 py-3 flex flex-col items-center mx-auto w-3/6 bg-neutral-100 opacity-50">
              <h2 className="text-lg font-bold">{name}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
  )
}

export default Category