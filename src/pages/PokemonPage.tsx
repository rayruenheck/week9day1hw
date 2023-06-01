
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
const base_api_url = import.meta.env.VITE_APP_BASE_API

  interface Ability {
    ability: {
      name: string;
    };
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }
  
  interface Type {
    type: {
      name: string;
    };
  }
  
  interface PokemonAbilities {
    abilities: Ability[];
    stats: Stat[];
    types: Type[];
    base_experience: number;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
  }


 
export default function PokemonPage():JSX.Element{
    
    const { pokemonName } = useParams();

    
    const [pokemon, setPokemon] = useState<PokemonAbilities | null>(null)
    
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`${base_api_url}/${pokemonName}`)
            if(res.ok){
                const data = await res.json()
                setPokemon(data)
                
                
            }
        })()
    },[])

   


    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img style={{height: '200px', width:'200px'}} variant="top" src={pokemon?.sprites.other['official-artwork'].front_default} />
      <Card.Body>
        <Card.Title>{pokemonName}</Card.Title>
        <Card.Text>
          <p>Abilities: {pokemon?.abilities.map((item,i)=><li key={i}>{item.ability.name}</li>)}</p>
          <p>Stats: {pokemon?.stats.map((item,i)=><li key={i}>{item.stat.name}:  {item.base_stat}</li>)}</p>
          <p>Types: {pokemon?.types.map((item,i)=><li key={i}>{item.type.name}</li>)}</p>
          <p>Experience: {pokemon?.base_experience}</p>
        </Card.Text>
        <Button variant="primary">Add to Deck</Button>
      </Card.Body>
    </Card>
      
  )


  



}


