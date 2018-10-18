import React from 'react'
import Anexo from '../commons/Anexos'
import ExplainAnexo from '../commons/AnexosEx'
import AnexosFooter from '../commons/AnexosFooter'
import  {Row,Col} from 'reactstrap'

const Anexo3 = () => (
    <Row>
        <Col xs={12} md={3}>
            <Anexo number={2} label1={'PAUTAS PARA \n' +
            'ATENDER \n' +
            'INCIDENTES'}/>
        </Col>
        <Col xs={12} md={8}>
            <ExplainAnexo explain1={'Aseguramiento del área afectada y eliminación del riesgo presente.'} />
            <ExplainAnexo explain1={'Estabilización de la persona afectada.'} />
            <ExplainAnexo explain1={'Solicitud de atención médica u otro tipo de apoyo externo.\n'} />
            <ExplainAnexo explain1={'Acordonamiento y aseguramiento del área, luego del retiro del personal afectado.'} />
            <ExplainAnexo explain1={'Aislamiento de la infraestructura, equipamiento o producto afectado.\n'} />
            <ExplainAnexo explain1={'Identificación del personal que pudo presenciar el incidente para la recabar información adicional del suceso.\n'} />
            <AnexosFooter />
        </Col>
    </Row>
)


export default Anexo3
