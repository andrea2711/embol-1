import React from "react";
import  {Row,Col} from 'reactstrap'

const ExplainAnexo = (
    {
        explain1
    }
) => (
    <Row>
        <Col xs={12} md={12} className="anexo-explain">
            <p>{explain1}</p>
        </Col>
    </Row>
)


export default ExplainAnexo