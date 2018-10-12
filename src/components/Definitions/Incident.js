import React from 'react'
import  {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'
const IncidentDefinition = () => (

<Container>
    <Row>
        <Col>
            <h1 className="embol-line-height no-padding">INCIDENTE</h1>
            <h1>  ELEVADO</h1>
            <Link to={'/Definitions'}>Volver</Link>
        </Col>
        <Col className="embol-especial">
            Que puede causar preocupación entre el público y/o los empleados relacionados con la salud y la seguridad
        </Col>
        <Col  className="embol-especial">
            Que involucren muertes o lesiones / enfermedades serias relacionadas con instalaciones, vehículos, eventos u otra conexión con el sistema  KO.
        </Col>
        <Col  className="embol-especial">
            Que involucre violación significativa a leyes o estándares ambientales.
        </Col>
        <Col  className="embol-especial">
            Que involucren descargas ambientales, derrames químicos, accidentes de camiones.
        </Col>
        <Col  className="embol-especial">
            Que involucre retiro de producto del mercado.
        </Col>
    </Row>
</Container>


)

export default IncidentDefinition