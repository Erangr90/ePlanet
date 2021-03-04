// Node packages
import React from 'react'
import {Navbar,Form ,Nav,FormControl,Button} from 'react-bootstrap'


const Header = () => {


  return (
    <header>
    <Navbar bg='light' variant='light' collapseOnSelect>
        <Navbar.Brand href='/'>ePlanet</Navbar.Brand>
        <Nav className='mr-auto'>
            <Nav.Link href='#home'>Sing in</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
            <Nav.Link href='#pricing'>Sales</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
        </Form>
    </Navbar>
    </header>
  )
}

export default Header

