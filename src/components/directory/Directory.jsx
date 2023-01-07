import Category from "../category-item/Category"

function Directory({categories}) {
  return (
    <div className="flex w-full flex-wrap	justify-between">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory