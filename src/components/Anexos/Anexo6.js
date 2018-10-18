import React from 'react'
import Anexo from '../commons/Anexos'
import ExplainAnexo from '../commons/AnexosEx'
import AnexosFooter from '../commons/AnexosFooter'
import  {Row,Col} from 'reactstrap'

const Anexo5 = () => (
    <Row>
        <Col xs={12} md={3}>
            <div>
                <div className="embol-anexo">
                    <div className="step-container">
                        ANEXO 6
                    </div>

                </div>
                <h3 className="align-embol">PROCEDIMIENTO
                    <br/>DE  CONTINUIDAD
                    <br/>DE NEGOCIO</h3>
            </div>
        </Col>
        <Col xs={12} md={9}>
           <Row>
               <Col xs={12} md={2} className="embol-anexo-red">
                   <div className="arrow"></div>
                   INFORME AL LIDER DEL EMI NACIONAL
               </Col>
               <Col xs={12} md={10} className="embol-anexo-black">
                   El informe debe contener como mínimo la siguiente información según aplique:
                   <ul>
                       <li>Descripción del proceso.</li>
                       <li>Informe de heridos y/ o victimas</li>
                       <li>Áreas afectadas.</li>
                       <li>Estado de las actividades de respuesta.</li>
                       <li>Atención prestada por los medios de comunicación, reacción del personal, entidades gubernamentales y/ o reguladoras.</li>
                   </ul>
               </Col>
           </Row>
            <Row>
                <Col xs={12} md={2} className="embol-anexo-red">
                    <div className="arrow"></div>
                    IDENTIFICACIÓN DEL RIESGO Y CUANTIFICACIÓN DEL IMPACTO
                </Col>
                <Col xs={12} md={10} className="embol-anexo-black">
                    Identificar:
                    <ul>
                        <li>Los procesos afectados.</li>
                        <li>Daño que ha sufrido la infraestructura tecnológica.</li>
                        <li>Cómo afecta económicamente la interrupción.</li>
                        <li>Cuál sería la capacidad operativa de la organización.</li>
                        <li>Cuál es el plazo máximo para volver a la normalidad.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2} className="embol-anexo-red">
                    <div className="arrow"></div>
                    ELABORACIÓN DE LA ESTRATEGIA
                </Col>
                <Col xs={12} md={10} className="embol-anexo-black">
                    <ul>
                        <li>Para la elaboración de la estrategia considerar:</li>
                        <li>Seleccionar los métodos operativos que se van a utilizar.</li>
                        <li>Garantizar la restauración de los procesos afectados.</li>
                    </ul>
                    Considerar factores:
                    <ul>
                        <li>Técnicos;</li>
                        <li>Tecnología de la información;</li>
                        <li>Recursos Humanos;</li>
                        <li>Abastecimientos;</li>
                        <li>Finanzas;</li>
                        <li>Relaciones publicas y atención a cliente.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2} className="embol-anexo-red">
                    <div className="arrow"></div>
                    EJECUCIÓN DEL PLAN
                </Col>
                <Col xs={12} md={10} className="embol-anexo-black">
                    Para poder llevar adelante la ejecución del plan debe considerar establecer claramente:
                    <ul>
                        <li>Cronograma de actividades.</li>
                        <li>Responsables de ejecución por actividad.</li>
                        <li>Mecanismos de seguimiento y control.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2} className="embol-anexo-red">
                    <div className="arrow"></div>
                    MONITOREO Y CONTROL
                </Col>
                <Col xs={12} md={10} className="embol-anexo-black">
                    Hacer seguimiento a las actividades planificadas para asegurarse que se obtengan los resultados esperados, de ser necesario se realizan ajustes.
                </Col>
            </Row>
        </Col>
    </Row>
)


export default Anexo5
