import Card from 'react-bootstrap/Card';

interface PokeInfo{
    id:number,
    name:string,
    type:string[],
    abilities:string[]
}

export default function PokeInfo(props:PokeInfo){

    return(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <li>{props.type}</li>
          <li>{props.abilities}</li>
        </Card.Text>
      </Card.Body>
    </Card>
        </>
    )

}
