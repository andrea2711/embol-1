import React from 'react'
import  {Row,Col} from 'reactstrap'
import { Link } from 'react-router-dom'

const AnexosFooter = (
    {
      explain1 , explain2 ,link1,link2 }
) => (
    <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
            <div className="embol-footer">{explain1}<Link to='/Definitions'>{link1}</Link> </div>
            <div className="embol-footer_arrow"></div>
            <div className="embol-footer">{ explain2} <Link to='/Definitions'>{link2}</Link></div>
        </Col>
    </Row>
)


export default AnexosFooter