import React from 'react'
import  {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'

const info = () => (
    <Container>
        <Row>
            <Col xs={12} md={4}>
                <h1 className="embol-line-height">MANEJO DE</h1>
                <h1>INCIDENTES <span className="embol-line-height">y</span></h1>
                <h1 className="embol-line-height">RESOLUCION DE </h1>
                <h1>CRISIS</h1>
                <div className="embol-divider"></div>
            </Col>
            <Col xs={12} md={8}>
                <Row className="Add-padding">
                    <Col xs={12} md={4} >
                        <div className="right">ADVERTENCIA</div>
                        <div className="arrow_down"></div>
                    </Col>
                    <Col xs={12} md={4} className="arrow-connect">
                    </Col>
                    <Col xs={12} md={4}>
                        <div>ALERTA INICIAL</div>
                        <div className="arrow_down right"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="back-gradient">
                        INCIDENTE
                    </Col>
                    <div className="connect-2"></div>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="back-gradient">
                        INCIDENTE ELEVADO
                    </Col>
                    <div className="connect-3"></div>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} className="back-gradient add-small-top">
                        ACTIVACIÓN IMCR
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }} className="embol-footer_arrow center">
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={6}>
                        <div className="connect-1"></div>
                        <div className="add-top">
                            <div className="title-info">soporte</div>
                            <div className="card-info ">
                                <ul>
                                    <li>
                                        <div className="text">
                                            Comunicación –
                                            Activación EMI Operación
                                        </div>
                                        <div className="embol-footer_arrow"></div>
                                        <div className="embol-footer_arrow"></div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            Comunicación IMCR KO
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                    <Col sm="12" md={6}>
                        
                        <div className="title-info">operación</div>
                        <div className="text-vert">Flujo</div>
                        <div className="card-info">
                            <ul>
                                <li>
                                    <div className="text">
                                        <div className="number">1</div>
                                        Identificación Situación
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">2</div>
                                        Comunicación –
                                        Activación EMI Operación
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">3</div>
                                        Verificación de Datos
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">4</div>
                                        Confirmación
                                        Gravedad del Incidente
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">5</div>
                                        Medidas de Control
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">6</div>
                                        Análisis de Causa y
                                        Plan de Acción
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">7</div>
                                        Lecciones Aprendidas
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                                <li>
                                    <div className="text">
                                        <div className="number">8</div>
                                        Revisión
                                        Procedimientos IMCR
                                    </div>
                                    <div className="embol-footer_arrow"></div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)


export default info