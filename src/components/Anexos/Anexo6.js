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
                <h1 className="align-embol">ÁMBITOS <br/>
                    DE AFECTACIÓN</h1>
            </div>
        </Col>
        <Col xs={12} md={8}>
           <Row>
               <Col xs={12} md={6}>
                   <div><img src="src/assets/personas.png" alt=""/></div>
                   <div>
                       <h6>Personas</h6>
                       <p>Cuando el incidente, involucra daños a personas que sean de la organización o terceras, que se vieran afectadas de manera directa.</p>
                   </div>
               </Col>
               <Col xs={12} md={6}></Col>
           </Row>

        </Col>
    </Row>
)


export default Anexo5
