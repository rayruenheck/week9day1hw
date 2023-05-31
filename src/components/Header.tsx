import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
export default function Header(){
    
    return (
        <>
        <Navbar bg='light' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand>Pokemon</Navbar.Brand>
            </Container>
        </Navbar>
        <h1>Pokedex</h1>
        </>
    )
}