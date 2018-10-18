import React from 'react'
import  {Row,Col} from 'reactstrap'
import { Link } from 'react-router-dom'

const AnexosFooter = (
    {
      explain1 , explain2 ,link1,link2 }
) => (
    <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
            <div className="embol-footer">IDENTIFICAR POSIBLE AFECTACIÓN – <Link to='/Anexo5'> VER ANEXO DE AFECTACIONES</Link> </div>
            <div className="embol-footer_arrow"></div>
            <div className="embol-footer">ACTIVACIÓN DEL <Link to='/Anexo6'>PROCEDIMIENTO DE CONTINUIDAD DEL NEGOCIO</Link></div>
        </Col>
    </Row>
)


export default AnexosFooter