
import { FC } from 'react';
import { Card, Grid} from '@nextui-org/react'


import { useRouter } from 'next/router';

interface Props {
    pokemon: number;
    
    }

export const FavoritePokemonCard:FC<Props> = ({pokemon}) => {

  const router = useRouter();

  const onClick = () => {

    router.push(`/pokemon/${pokemon}`)

  }

  return (

    <Grid key={pokemon} xs={6} sm={2} xl={1} >
                <Card
                  hoverable
                  clickable
                  css={{padding:10}}
                  onClick={onClick}
                >
                  <Card.Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
                    width={'100%'}
                    height={140}

                  
                  />

                </Card>

    </Grid>

  
  )
}
