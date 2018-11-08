import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import {Link} from "react-router-dom";


const Step3 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Steps number={3} label1={'VERIFICACIÓN'} label2={'DE DATOS'}/>
        </Col>
        <Col xs={12} md={8}>
            <div className="embol-explain-container">
            <Explain  bgColor={'_red'} ask={'quién'} explain1={'El Líder del EMI de la Operación..'} />
            <Explain bgColor={'_red'} ask={'qué'} explain1={'   Solicita al integrante del EMI del área afectada, que recabe toda la información referente a la situación.'} />
            <Explain bgColor={'_red'} ask={'cómo'} explain1={'Mediante entrevistas, investigación, trazabilidad según aplique. Ver anexos 1, 2, 3 y 4.'}/>
            <Explain bgColor={'_red'} ask={'cuando'} explain1={'Una vez solicitada la información.'}/>
            <Explain bgColor={'_red'} ask={'tiempo'} explain1={'No mayor a dos horas, de tener conocimiento de la situación.'}/>
            <Link className="next-arrow" to='/Step4'/>
                <Link className="back-arrow" to='/Step2'/>
            </div>
        </Col>
    </Row>

)


export default Step3