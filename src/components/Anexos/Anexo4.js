import React from 'react'
import Anexo from '../commons/Anexos'
import ExplainAnexo from '../commons/AnexosEx'
import AnexosFooter from '../commons/AnexosFooter'
import  {Row,Col} from 'reactstrap'

const Anexo4 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Anexo number={4} label1={'INCIDENTES  CON \n' +
            'AFECTACIÓN \n' +
            'A BIENES  O \n' +
            'EQUIPAMIENTO'}/>
        </Col>
        <Col xs={12} md={8}>
            <ExplainAnexo explain1={'Aseguramiento del área afectada y eliminación del riesgo presente.'} />
            <ExplainAnexo explain1={'Aislamiento de bienes o áreas colindantes para minimizar la afectación.'} />
            <ExplainAnexo explain1={'Solicitud de apoyo externo'} />
            <ExplainAnexo explain1={'Acordonamiento y aseguramiento del área.'} />
            <ExplainAnexo explain1={'Comunicación con el seguro.'} />
            <ExplainAnexo explain1={'Identificación del personal que pudo presenciar el incidente para la recabar información adicional del suceso.\n.'} />
            <AnexosFooter />
        </Col>
    </Row>
)


export default Anexo4
