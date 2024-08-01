import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import route from './route/index';
import { createContext, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import { logInContext } from './context';

export default function App(args) {
  const routes = useRoutes(route);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  let logId = useContext(logInContext);

  return (
    <div>
      <h3>로그인: {logId.userid}</h3>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <logInContext.Provider value={{ userid: '김유신', isLogin: 'true' }}>
                <NavLink href="/Board/list">BoardList</NavLink>
              </logInContext.Provider>
            </NavItem>
            <NavItem>
              <NavLink href="/CustomerList">CustomerList</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Comp
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/condition">condition</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/book">book</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      {routes}
    </div>
  );
}
