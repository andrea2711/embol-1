import React from 'react'
import { Link } from 'react-router-dom'
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
    DropdownItem } from 'reactstrap';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand> <Link className="embol-logo" to='/'></Link></NavbarBrand>
                    <NavbarToggler className="ml-auto" onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto embol-navbar" navbar >
                            <NavItem>
                                <NavLink >
                                    <Link to='/Definitions'>DEFINICIONES <br/> IMPORTANTES</Link>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                MANEJO DE INCIDENTES <br/> Y RESOLUCIÓN DE CRISIS
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step1'><span className="embol-red">PASO 1 </span>IDENTIFICACIÓN DE LA SITUACIÓN
                                    </Link>
                                </DropdownItem>
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step2'><span className="embol-red">PASO 2 </span>
                                        Comunicación / ACTIVACIÓN EMI - OPERACIÓN
                                    </Link>
                                </DropdownItem>
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step3'><span className="embol-red">PASO 3 </span>
                                        verificación de Datos
                                    </Link>
                                </DropdownItem >
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step4'><span className="embol-red">PASO 4 </span>
                                        Confirmación ACTIVACIÓN IMCR
                                    </Link>
                                </DropdownItem>
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step5'><span className="embol-red">PASO 5 </span>
                                        Medidas de control
                                    </Link>
                                </DropdownItem>
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step6'><span className="embol-red">PASO 6 </span>
                                        Análisis de Causas y Plan de acción
                                    </Link>
                                </DropdownItem >
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step7'><span className="embol-red">PASO 7 </span>
                                        Lecciones Aprendidas
                                    </Link>
                                </DropdownItem>
                                <DropdownItem className="embol-dropdown-item">
                                    <Link to='/Step8'><span className="embol-red">PASO 8 </span>
                                        Revisión de los Procedimientos
                                    </Link>
                                </DropdownItem>
                               </DropdownMenu>
                        </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    CONTACTOS
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem>
                                        <Link to='/Incidents'><span>PASO 1 </span>IDENTIFICACIÓN DE LA SITUACIÓN
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    ANEXOS
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem>
                                        <Link to='/Anexo1'><span>PASO 1 </span>IDENTIFICACIÓN DE LA SITUACIÓN
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}