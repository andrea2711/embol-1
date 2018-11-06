import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import {Link} from "react-router-dom";


const Step2 = () => (
<Row>
    <Col xs={12} md={4}>
    <Steps number={2} label1={'COMUNICACIÓN'} label2={'ACTIVACIÓN\n' +
    'EMI - OPERACIÓN'}/>
    </Col>
    <Col xs={12} md={8}>
        <div className="embol-explain-container">
    <Explain bgColor={'_black'} ask={'quién'} explain1={'El líder del EMI – Operación.'} />
    <Explain bgColor={'_black'} ask={'qué'} explain1={'Llama a reunión inmediata a los integrantes del equipo EMI. Ver Cartilla de Contactos.\n' +
    'De forma paralela comunica al Líder del EMI Nacional, Coordinador Nacional del EMI y Gerente Nacional del área afectada, para que estén alertas sobre la situación.'} />
    <Explain  bgColor={'_black'} ask={'cómo'} explain1={'De forma conjunta con el EMI de la Operación, analiza la situación y recaba la información preliminar, para determinar si se activa o no el IMCR.'}/>
    <Explain bgColor={'_black'} ask={'cuando'} explain1={'Una vez se tenga conocimiento de la situación.'}/>
    <Explain  bgColor={'_black'} ask={'tiempo'} explain1={'No mayor a dos horas, de tener conocimiento de la situación.'}/>
        <Link className="next-arrow" to='/Step3'/>
        </div>
    </Col>

</Row>

)


export default Step2
