import React from 'react';
import Image from 'next/image';
import { Nav, Container, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className={styles.header}>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src='/image/dev.png' alt='logo' width={100} height={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav className={styles.menu}>
            <Nav.Link href='#deets'>Devloper</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
