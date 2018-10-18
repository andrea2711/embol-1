import React from 'react'
import Anexo from '../commons/Anexos'
import ExplainAnexo from '../commons/AnexosEx'
import AnexosFooter from '../commons/AnexosFooter'
import  {Row,Col} from 'reactstrap'

const Anexo5 = () => (
    <Row>
        <Col xs={12} md={3}>
            <div>
                <div className="embol-anexo">
                    <div className="step-container">
                        ANEXO 5
                    </div>

                </div>
                <h3 className="align-embol">ÁMBITOS <br/>
                    DE AFECTACIÓN</h3>
            </div>
        </Col>
        <Col sm="12" md={{ size: 7, offset: 1 }} className="anexo-5">
           <Row>
               <Col xs={12} md={6}>
                   <div className="img personas"></div>
                   <div>
                       <h6>Personas</h6>
                       <p>Cuando el incidente, involucra daños a personas que sean de la organización o terceras, que se vieran afectadas de manera directa.</p>
                   </div>
               </Col>
               <Col xs={12} md={6}>
                   <div className="img comunidad"></div>
                   <div>
                       <h6>Comunidad</h6>
                       <p>Cuando el incidente tiene afectaciones con los vecinos, población en general, familias de personas terceras afectadas.</p>
                   </div>
               </Col>
           </Row>

            <Row>
                <Col xs={12} md={6}>
                    <div className="img medio"></div>
                    <div>
                        <h6>Medio Ambiente</h6>
                        <p>Cuando el incidente presenta afectación de manera directa al medio ambiente, aire, agua, tierra.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="img bienes"></div>
                    <div>
                        <h6>Bienes</h6>
                        <p>Cuando el incidente, presenta daños materiales, sean a equipos, infraestructura, movilidades y otro tipo de bienes tangibles.</p>
                    </div>
                </Col>
            </Row>

        </Col>
    </Row>
)


export default Anexo5
