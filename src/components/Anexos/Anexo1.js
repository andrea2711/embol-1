import React from 'react'
import Anexo from '../commons/Anexos'
import ExplainAnexo from '../commons/AnexosEx'
import AnexosFooter from '../commons/AnexosFooter'
import  {Row,Col} from 'reactstrap'

const Anexo1 = () => (
    <Row>
        <Col xs={12} md={4}>
            <Anexo number={1} label1={'INCIDENTES DE \n' +
            'CALIDAD/ \n' +
            'INOCUIDAD'}/>
        </Col>
        <Col xs={12} md={8}>
            <ul className="anexo-explain-container">
            <ExplainAnexo explain1={'Revisión de las contra-muestras, según producto observado.'} />
            <ExplainAnexo explain1={'Realización de la trazabilidad hacia atrás, verificando materias primas e insumos, tanto en stock de almacenes, como el que fue utilizado para la elaboración del producto en cuestión.'} />
            <ExplainAnexo explain1={'Realización de la trazabilidad durante la producción, verificación de uso de envases, tratamiento de aguas, jarabes e insumos utilizados para los mismos.'} />
            <ExplainAnexo explain1={'Verificación del Producto Terminado, cantidades presentes en almacenes.\n' +
            'Identificación del producto en cuestión que se encuentre dentro de almacenes, para evitar su salida.'} />
            <ExplainAnexo explain1={'Identificación de los puntos de venta a los que fue distribuido el producto en cuestión.\n' +
            'Verificar cuadratura.'} />
                <li className="anexo-explain note"><p>NOTA: Si se identifican personas que han sido afectadas por el consumo del producto en cuestión, se debe prestar apoyo en la atención médica.</p></li>
            </ul>
            <AnexosFooter />
        </Col>
    </Row>

)


export default Anexo1
