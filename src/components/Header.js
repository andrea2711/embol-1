import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from'react-bootstrap'


const Header = () => (

    <Navbar>
    <Navbar.Header>
    <Navbar.Brand>
        <Link to='/'>EMBOL</Link>
</Navbar.Brand>
</Navbar.Header>
<Nav>
    <NavItem eventKey={1} href="#">
        <Link to='/Definitions'>DEFINICIONES IMPORTANTES</Link>
    </NavItem>
    <NavDropdown eventKey={3} title="MANEJO DE INCIDENTES Y RESOLUCIÓN DE CRISIS" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>
            <Link to='/Incidents'><span>PASO 1 </span>IDENTIFICACIÓN DE LA SITUACIÓN
            </Link>
        </MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
    <NavDropdown eventKey={3} title="CONTACTOS" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>
            <Link to='/Incidents'><span>IMCR -  </span>NACIONAL
            </Link>
        </MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
    <NavDropdown eventKey={3} title="ANEXOS" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>INCIDENTES CALIDAD / INOCUIDAD  <span>- 1 </span>
            <Link to='/Incidents'>
            </Link>
        </MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
</Nav>
</Navbar>
)

export default Header
