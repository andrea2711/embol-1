import React from 'react'
import  {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'

const Definitions = () => (
<Container>
    <Row>
        <Col xs={12} md={4}>
            <h1 className="embol-line-height">DEFINICIONES</h1>
            <h1>IMPORTANTES</h1>
            <div className="embol-divider"></div>
        </Col>
        <Col xs={12} md={4}>
            <div className="embol-paragraph">
                <h1 className="embol-line-height">ALERTA </h1>
                  <h1>  INICIAL</h1>
                Una comunicación inicial para alertar
                de un problema potencial serio o una
                comunicación solo “por si acaso”.
                Puede ser definida como una
                comunicación sensible en el
                momento inicial para un potencial
                incidente serio o uno que
                “rompe como noticia”. </div>
            <div className="embol-paragraph">
              <h1 className="text-danger">INCIDENTE</h1>
                Un evento de riesgo definido que
                podría impactar adversamente al
                negocio si no es identificado con
                prontitud y manejado con efectividad.
                Un incidente es una ocurrencia
                definitiva, a veces sin advertencia o
                señales claras
            </div>
        </Col>
        <Col xs={12} md={4}>
            <div className="embol-paragraph">
                <h1 className="text-danger">ADVERTENCIA</h1>
                Una comunicación que es registrada
                usando la estructura del IMCR, pero que
                no solicita acción del Equipo IMCR.
                Puede ser definida como una
                comunicación de pre-incidente que es
                registrado dentro del marco del IMCR
                pero que no invoca a una acción del EMI. </div>

            <div className="embol-paragraph">
                <h1 className="embol-line-height">INCIDENTE</h1>
                  <h1>  ELEVADO</h1>
                <Link className="circle" to={'/Incident'}> <div className="small-arrow"></div></Link>
                Un incidente elevado es un evento
                definitivo de mayor riesgo, concreto,
                menos común que un incidente, y que
                podría impactar adversamente a más de
                una unidad de negocios y/o afectar
                negativamente la imagen y reputaciónde
                la marca.
            </div>
        </Col>
    </Row>
</Container>
)


export default Definitions
