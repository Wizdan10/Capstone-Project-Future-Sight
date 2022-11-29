import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Logo from '../images/icons/future-sight.png'

function NavbarMain({logout, name}){
    return(
        <Navbar className='shadow-sm' expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link to="/"><img src={Logo} alt="Logo" width={80}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" ms-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
            >
                <Link to={'/notes'} className='navbar-link navbar-text me-5'>My Note</Link>
                <Link to={'/favorite'} className='navbar-link navbar-text me-5'> Favorite</Link>
                <Link className='navbar-link navbar-text me-5' to={'/'} onClick={logout}><FiLogOut/>{name}</Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
   
}

NavbarMain.propTypes={
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

export default NavbarMain