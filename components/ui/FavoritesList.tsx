import { FC } from 'react';
import { Grid } from "@nextui-org/react";
import { FavoritePokemonCard } from '../pokemon/FavoritePokemonCard';

interface Props {

  favoritesPokemons:number[];
  
}


export const FavoritesList:FC<Props> = ({favoritesPokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>

            {favoritesPokemons.map(id => (

              <FavoritePokemonCard key={id} pokemon={id}/>


            ) )
            }


          </Grid.Container>
  )
}


