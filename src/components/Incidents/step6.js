import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import {Link} from "react-router-dom";


const Step6 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Steps number={6} label1={'ANáLISIS\n' +
            'DE CAUSAS'} label2={'ACTIVACIÓN IMCR'}/>
        </Col>
        <Col xs={12} md={8}>
            <Explain  bgColor={'_red'} ask={'quién'} explain1={'El líder del EMI – Operación, junto con su equipo.'} />
            <Explain bgColor={'_red'} ask={'qué'} explain1={'Realiza un análisis de causas y establece las acciones inmediatas, a corto, mediano y largo plazo.'} />
            <Explain bgColor={'_red'} ask={'cómo'} explain1={'Tomando como referencia el Procedimiento de Acciones Correctivas.'}/>
            <Explain bgColor={'_red'} ask={'cuando'} explain1={'Una vez concluidas las medidas de control.'}/>
            <Explain bgColor={'_red'} ask={'tiempo'} explain1={'No mayor a 15 días de concluidas las medidas de control.'}/>
            <Link className="next-arrow" to='/Step7'/>
        </Col>
    </Row>

)


export default Step6