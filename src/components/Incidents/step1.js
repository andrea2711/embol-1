import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import { Link } from 'react-router-dom'

const Step1 = () => (
<Row>
    <Col xs={12} md={4}>
    <Steps number={1} label1={'Identificación'} label2={'Situación'}/>
    </Col>
    <Col xs={12} md={8}>
        <div className="embol-explain-container">
    <Explain bgColor={'_gray'} ask={'quién'} explain1={'Todo personal de la organización.'} explain2={'Personal del C.R.C.'}/>
    <Explain  bgColor={'_gray'} ask={'qué'} explain1={'Comunica la alerta, advertencia o incidente a su Jefe inmediato.'} explain2={'Comunica alerta, advertencia, incidente asociado con producto en el mercado al Líder del EMI- Operación.'}/>
    <Explain  bgColor={'_gray'} ask={'cómo'} explain1={'Mediante comunicación verbal o vía telefónica.'} explain2={'Mediante llamado telefónico y vía correo.'}/>
    <Explain  bgColor={'_gray'} ask={'cuando'} explain1={'Una vez presenciado el incidente o escuchado de la alerta o advertencia.'}/>
        <Explain bgColor={'_gray'} ask={'tiempo'} explain1={'De forma inmediata.'}/>
        </div>
            <Link className="next-arrow" to='/Step2'/>
    </Col>

</Row>

)


export default Step1
