import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import "./NavBar.css"
import CartWidget from "./CartWidget/cartWidget";
import {Link as LinkBoostrap} from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
        <Navbar bg="light">
        <Container>
            <LinkBoostrap to="/" className='tamañoLetra'>JuegosMaxx</LinkBoostrap>
            <Stack className="justify-content-end p-3 tamañoLetra" direction="horizontal" gap={5}>
        <Nav.Item>
          <LinkBoostrap className='tamañoLetra' to="/">Home</LinkBoostrap>
        </Nav.Item>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item><LinkBoostrap className='tamañodrop' to="/juegos/Accion">Accion</LinkBoostrap></NavDropdown.Item>
        <NavDropdown.Item><LinkBoostrap className='tamañodrop' to="/juegos/Carreras">Carreras</LinkBoostrap></NavDropdown.Item>
        <NavDropdown.Item><LinkBoostrap className='tamañodrop' to="/juegos/Deporte">Deporte</LinkBoostrap></NavDropdown.Item>
        <NavDropdown.Item><LinkBoostrap className='tamañodrop' to="/juegos/Terror">Terror</LinkBoostrap></NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <LinkBoostrap className='tamañoLetra' to="/contacto">Contactanos</LinkBoostrap>
        </Nav.Item>
        <LinkBoostrap className='tamañoLetra' to="/carrito"><CartWidget></CartWidget></LinkBoostrap>
      </Stack>
      </Container>
      </Navbar>
      
  );
}
export default NavBar