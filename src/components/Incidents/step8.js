import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'


const Step8 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Steps number={8} label1={'revisión de los'} label2={'procedimientos'}/>
        </Col>
        <Col xs={12} md={8}>
            <Explain bgColor={'_black'} ask={'quién'} explain1={'El SGI de la Operación.'} explain2={'El SGI Nacional'}/>
            <Explain bgColor={'_black'} ask={'qué'} explain1={'Revisa los procedimientos involucrados del IMCR y los actualiza.'} />
            <Explain bgColor={'_black'} ask={'cuando'} explain1={'Una vez concluido el levantamiento del Plan de Acción.'}/>
            <Explain  bgColor={'_black'} ask={'tiempo'} explain1={'No mayor a 15 días de concluido el Plan de Acción.'}/>
        </Col>
    </Row>

)


export default Step8