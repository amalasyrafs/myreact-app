import React, { useState } from 'react';
import {
  Nav,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      {/* the Navbar */}
      <Navbar light style={{ backgroundColor: 'floralwhite' }} expand='lg'>
        <NavbarBrand href='/home'>
          <img
            src='assets/images/smileface.png'
            height='60'
            width='60'
            alt='Logo'
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto mr-5' navbar>
            <NavItem className='nav-item'>
              <NavLink to='/home' className=' nav-link'>
                <i class='fa fa-home'></i> Home
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='/home' className=' nav-link'>
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Content-List
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: 'floralwhite' }}>
                <DropdownItem className='nav-item'>
                  <NavLink to='/Game'>Tic-Tac</NavLink>
                </DropdownItem>
                <DropdownItem className='nav-item'>
                  <NavLink to='/Weather'>Weather</NavLink>
                </DropdownItem>
                <DropdownItem className='nav-item'>
                  <NavLink to='/Recipes'>Recipes</NavLink>
                </DropdownItem>
                <DropdownItem className='nav-item'>
                  <NavLink to='/home'>Covid-19 Form</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
