import Category from "../category-item/Category"

const Directory = () => {
  const categories = [
    {
      id: '1',
      "name": "Hats",
      "imageUrl": "./images/hats-img.png",
      "route": "shop/hats"
    }, {
      id: '2',
      "name": "Jackets",
      "imageUrl": "./images/jackets-img.png",
      "route": "shop/jackets"
    }, {  
      id: '3',
      "name": "Sneakers",
      "imageUrl": "./images/sneakers-img.png",
      "route": "shop/sneakers"
    }, {
      id: '4',
      "name": "Womens",
      "imageUrl": "./images/womens-img.png",
      "route": "shop/womens"
    }, {
      id: '5',
      "name": "Mens",
      "imageUrl": "./images/men-img.png",
      "route": "shop/mens"
    }
  ]

  return (
    <div className="flex w-full flex-wrap	justify-between">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory