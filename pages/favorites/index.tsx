
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Nofavorites, FavoritesList }  from "../../components/ui";
import { localFavorites } from "../../utils";

const Favorites = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    
    setFavoritesPokemons(localFavorites.pokemons);
    
  }, [])
  
  
  return (

    <Layout title="Pokemons - Favoritos">
      
      {
        favoritesPokemons.length === 0 
        ? (<Nofavorites />) 
        : ( <FavoritesList favoritesPokemons={favoritesPokemons} />
         
        )
      }
    
    </Layout>
  )
}

export default Favorites