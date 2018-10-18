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
    div } from 'reactstrap';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeDropDown(){
        this.setState({
            isOpen:false
        })
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand className="embol-logo"> <Link className="embol-logo-ex" to='/'>IMRC</Link></NavbarBrand>
                    <NavbarToggler className="ml-auto" onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto embol-navbar" navbar >
                            <NavItem>
                                <div className="nav-link" >
                                    <Link to='/Definitions'>DEFINICIONES  IMPORTANTES</Link>
                                </div>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                MANEJO DE INCIDENTES Y RESOLUCIÓN DE CRISIS
                            </DropdownToggle>
                            <DropdownMenu left>
                                <div onClick={this.closeDropDown} className="embol-dropdown-item">
                                      <Link to='/Step1'><span className="embol-red">PASO 1 </span>IDENTIFICACIÓN DE LA SITUACIÓN
                                        </Link>
                                </div>
                                <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                    <Link to='/Step2'><span className="embol-red">PASO 2 </span>
                                        Comunicación / ACTIVACIÓN EMI - OPERACIÓN
                                    </Link>
                                </div>
                                <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                    <Link to='/Step3'><span className="embol-red">PASO 3 </span>
                                        verificación de Datos
                                    </Link>
                                </div >
                                <div onClick={this.closeDropDown} className="embol-dropdown-item">
                                    <Link to='/Step4'><span className="embol-red">PASO 4 </span>
                                        Confirmación ACTIVACIÓN IMCR
                                    </Link>
                                </div>
                                <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                    <Link to='/Step5'><span className="embol-red">PASO 5 </span>
                                        Medidas de control
                                    </Link>
                                </div>
                                <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                    <Link to='/Step6'><span className="embol-red">PASO 6 </span>
                                        Análisis de Causas y Plan de acción
                                    </Link>
                                </div >
                                <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                    <Link to='/Step7'><span className="embol-red">PASO 7 </span>
                                        Lecciones Aprendidas
                                    </Link>
                                </div>
                                <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                    <Link to='/Step8'><span className="embol-red">PASO 8 </span>
                                        Revisión de los Procedimientos
                                    </Link>
                                </div>
                               </DropdownMenu>
                        </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    CONTACTOS
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                        <Link to='/Contacts'><span>PASO 1 </span>IDENTIFICACIÓN DE LA SITUACIÓN
                                        </Link>
                                    </div>
                                    <div>
                                        Option 2
                                    </div>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    ANEXOS
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                        <Link to='/Anexo1'>Incidentes calidad / inocuidad <span className="embol-red">- 1 </span>
                                        </Link>
                                    </div>
                                    <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                        <Link to='/Anexo2'>Incidentes con afectación al medio ambiente <span className="embol-red">- 2 </span>

                                        </Link>
                                    </div>
                                    <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                        <Link to='/Anexo3'>Pautas para entender incidentes <span className="embol-red">-3</span>
                                        </Link>
                                    </div>
                                    <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                        <Link to='/Anexo4'>Incidentes con afectación a bienes o equipamiento   <span className="embol-red">-4</span>
                                        </Link>
                                    </div>
                                    <div onClick={this.closeDropDown}  className="embol-dropdown-item">
                                        <Link to='/Anexo5'>Ambitos de afectación<span className="embol-red">-5</span>
                                        </Link>
                                    </div>
                                    <div onClick={this.closeDropDown} className="embol-dropdown-item">
                                        <Link to='/Anexo6'>continuidad de negocio <span className="embol-red">-6</span>
                                        </Link>
                                    </div>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}