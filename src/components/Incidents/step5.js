import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import {Link} from "react-router-dom";


const Step5 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Steps number={5} label1={'COMUNICACIÓN'} label2={'ACTIVACIÓN\n' +
            'EMI - OPERACIÓN'}/>
        </Col>
        <Col xs={12} md={8}>
            <Explain bgColor={'_black'} ask={'quién'} explain1={'El Líder del EMI de la Operación de forma conjunta con el Líder del EMI Nacional.'} />
            <Explain bgColor={'_black'} ask={'qué'} explain1={'Establece las medidas de control, según el tipo de incidente presentado.'} />
            <Explain  bgColor={'_black'} ask={'cómo'} explain1={'Con el apoyo de los anexos 1, 2, 3 y 4, según el incidente y considerando los ámbitos presentes en el  anexo 5 y las acciones para garantizar  la continuidad del Negocio (Ver Anexo 6).'}/>
            <Explain bgColor={'_black'} ask={'cuando'} explain1={'Una vez confirmada la activación del IMCR.'}/>
            <Explain  bgColor={'_black'} ask={'tiempo'} explain1={'No mayor a 24 horas de confirmado el incidente.'}/>
            <Link className="next-arrow" to='/Step6'/>
        </Col>
    </Row>

)


export default Step5
