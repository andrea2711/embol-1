import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import {Link} from "react-router-dom";


const Step4 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Steps number={4} label1={'CONFIRMACIÓN'} label2={'ACTIVACIÓN \n' +
            'IMCR'}/>
        </Col>
        <Col xs={12} md={8}>
            <div className="embol-explain-container">
            <Explain bgColor={'_gray'} ask={'quién'} explain1={'El líder del \n' +
            'EMI – Operación.'} explain2={'El vocero del \n' +
            'EMI – Nacional.'}/>
            <Explain  bgColor={'_gray'} ask={'qué'} explain1={'Con el apoyo del EMI y con respaldo de la información recabada, define el tipo de incidente y comunica al líder del EMI Nacional la activación del IMCR.'} explain2={'Comunica y activa el procedimiento de IMCR de la Compañía Coca-Cola.'}/>
            <Explain  bgColor={'_gray'} ask={'cómo'} explain1={'De forma verbal y mediante el envío de un correo electrónico dirigido al Líder del EMI Nacional y en copia a todo el EMI Nacional.'} />
            <Explain  bgColor={'_gray'} ask={'cuando'} explain1={'Una vez confirmada la situación.'}/>
            <Explain bgColor={'_gray'} ask={'tiempo'} explain1={'De manera inmediata luego de tener los datos necesarios.'}/>
            <Link className="next-arrow" to='/Step5'/>
                <Link className="back-arrow" to='/Step3'/>
            </div>
        </Col>
    </Row>

)


export default Step4
