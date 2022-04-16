import {pokeApi} from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (namerOrId:string) => {

    

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${namerOrId}`);

    return {

        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }


}