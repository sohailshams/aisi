import Directory from "../../components/directory/Directory";

function Home() {
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
        <Directory categories={categories} />
      );
}

export default Home