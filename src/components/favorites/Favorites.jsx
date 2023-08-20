import React from 'react';
import '../../App'
import "../favorites/favorites.css"	;
import { useAppContext } from "../../context/appContext";


const Favorites = () => {

	const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

	console.log("Favorites are: ", favorites);
  
	const favoritesChecker = (id) => {
	  const boolean = favorites.some((book) => book.id === id);
	  return boolean;
	};

	

	return (
		<div className='favorites'>
			{favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id} className="Book">
          <div>
            <img src={book.image_url} alt="#" />
          </div>
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>
            {favoritesChecker(book.id) ?

              <button type="button" onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
              :
              <button type="button" onClick={() => addToFavorites(book)}>
              Add to Favorites
            </button>
             }

          </div>
        </div>
      )) : 
	     <h1>You don't have any favorite books yet! </h1>}

		</div>
	);
};

export default Favorites;