import React from 'react'
import Anexo from '../commons/Anexos'
import ExplainAnexo from '../commons/AnexosEx'
import AnexosFooter from '../commons/AnexosFooter'
import  {Row,Col} from 'reactstrap'

const Anexo2 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Anexo number={2} label1={'INCIDENTES CON \n' +
            'AFECTACIÓN AL  \n' +
            'MEDIO  AMBIENTE'}/>
        </Col>
        <Col xs={12} md={8}>
            <ExplainAnexo explain1={'Contención del Impacto Ambiental generado de manera inmediata.\n'} />
            <ExplainAnexo explain1={'Acordonamiento del área afectada, identificando si no se presentaron daños a personas.'} />
            <ExplainAnexo explain1={'Solicitud de apoyo al personal capacitado para atender el tipo de incidente, sea interno o externo.'} />
            <ExplainAnexo explain1={'Verificación del daño que se generó, identificando la afectación, tanto en infraestructura, equipamiento, producto o personas.'} />
            <ExplainAnexo explain1={'Aislamiento de la infraestructura, equipamiento o producto. Apoyo en atención médica; si existe personas afectadas.'} />
            <ExplainAnexo explain1={'Comunicación a las autoridades ambientales en el lugar donde sucedió el incidente.'} />
            <AnexosFooter />
        </Col>
    </Row>
)


export default Anexo2
