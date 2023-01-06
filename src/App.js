
function App() {
  const categories = [
    {
      id: '1',
      "name": "Hats",
      "imageUrl": "./images/hats-img.png"
    }, {
      id: '2',
      "name": "Jackets",
      "imageUrl": "./images/jackets-img.png"
    }, {  
      id: '3',
      "name": "Sneakers",
      "imageUrl": "./images/sneakers-img.png"
    }, {
      id: '4',
      "name": "Womens",
      "imageUrl": "./images/womens-img.png"
    }, {
      id: '5',
      "name": "Mens",
      "imageUrl": "./images/men-img.png"
    }
  ]

  return (
    <div className="flex w-full flex-wrap	justify-between">
      {categories.map(({name, id, imageUrl}) => (
        <div key={id} className="flex flex-auto h-60 w-[30%] justify-center border-2 border-black items-center mx-4 my-1.5 overflow-hidden">
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
      ))}
    </div>
  );
}

export default App;
