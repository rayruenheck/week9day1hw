import PokeInfo from "../components/PokeInfo";

export default function PokeInfos(){
    const pokeArray=[
        {id:1,
        name:'bulbasour',
        type:['grass','poison'],
        abilities:['poison']},
        {id:4,
        name:'charmander',
        type:['fire'],
        abilities:['blaze']},
        {id:7,
        name:'squirtle',
        type:['water'],
        abilities:['torrent']},
        {id:10,
        name:'caterpie',
        type:['bug'],
        abilities:['shield dust']},
        {id:13,
        name:'weedle',
        type:['bug','poison'],
        abilities:['shield dust']}
    ]

    return (
        <>
        {pokeArray.map((pokemon)=>{
            return <PokeInfo id={pokemon.id}name={pokemon.name}type={pokemon.type}abilities={pokemon.abilities} />
        })}
        </>
    )

}