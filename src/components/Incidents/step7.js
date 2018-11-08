import React from 'react'
import Steps from '../commons/steps'
import Explain from '../commons/explain'
import  {Row,Col} from 'reactstrap'
import {Link} from "react-router-dom";


const Step7 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Steps number={7} label1={'lecciones'} label2={'aprendidas'}/>
        </Col>
        <Col xs={12} md={8}>
            <div className="embol-explain-container">
            <Explain bgColor={'_gray'} ask={'quién'} explain1={'El jefe del área involucrada.'} explain2={'El líder del EMI -Operación.'}/>
            <Explain  bgColor={'_gray'} ask={'qué'} explain1={'Elabora la lección aprendida y envía al Líder del EMI de su operación para\n' +
            'la revisión.'} explain2={'Envía las lecciones aprendidas.'}/>
            <Explain  bgColor={'_gray'} ask={'cómo'} explain1={'Con el apoyo del formato establecido y el apoyo del plan de acción elaborado.'} explain2={'Mediante correo electrónico al Líder del EMI Nacional, con copia a los lideres de EMI de las otras operaciones.\n'}/>
            <Explain  bgColor={'_gray'} ask={'cuando'} explain1={'Una vez concluido el plan de acción y su análisis de causa.'} explain2={'Una vez revisadas y aprobadas las lecciones aprendidas.'}/>
            <Explain bgColor={'_gray'} ask={'tiempo'} explain1={'No mayor a 2 días de concluido el plan de acción.'}/>
            <Link className="next-arrow" to='/Step8'/>
                <Link className="back-arrow" to='/Step6'/>
            </div>
        </Col>
    </Row>

)


export default Step7
