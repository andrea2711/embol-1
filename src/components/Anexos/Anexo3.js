import React from 'react'
import  {Container,Row,Col} from 'reactstrap'

const Anexo3 = () => (
    <Container className="NuevosAnexos">
   <Row>
       <h1>INFORMACIÓN COMPLEMENTARIA EVALUACIÓN INICIAL</h1>
   </Row>
        <Row>
            Para el proceso de evaluación inicial se debe seguir los siguientes pasos:
            <ul>
                <li>
                    <h6>1. Recopilación de Información</h6>
                    <div>            El proceso de recopilación de información es gestionado por el coordinador del EMI nacional a travéz de todos los miembros dependiendo del tipo de incidente.
                    </div>
                </li>
                <li>
                    <h6>            2. Análisis del Problema
                    </h6>
                    <div>            El propósito principal del Análisis del Problema es identificar:
                        <ul>
                            <li>            a. Naturaleza del Problema
                            </li>
                            <li>            b. Tamaño del Problema</li>
                            <li>
                            c. Solución Técnica
                </li>
                        </ul>
                    </div>
                </li>
            </ul>
            Para asegurar un análisis lo más completo posible es necesario responder una serie de preguntas, seguir el cuadro adjunto:

        </Row>
        <Row className="img-map"></Row>
        <Row>
            Posiblemente se tenga influencia limitada sobre el resultado del incidente o crisis; por lo que el análisis  llevará a tener:
            <li>     <span
                className="embol-red">       El MEJOR RESULTADO POSIBLE </span>define los hechos tal como los conocemos – la situación que sabemos es la que tenemos que manejar.
            </li>
            <li>
               <span
                   className="embol-red"> El ESCENARIO DEL PEOR CASO</span> define qué tan mal puede terminar el incidente o crisis – es decir, la peor situación que tal vez tengamos que resolver

            </li>
            <p>
                Identificando el mejor resultado posible y el escenario del peor caso nos puede llevar al manejo de un resultado más viable.
                Como apoyo o aclaración usar los lineamiento presentes en el Anexo 1.</p>
               <p> Toda la información debe ser concentrada con el Coordinador del EMI nacional. El asignará  prioridades y fechas límite para cada pregunta tan pronto como dicha pregunta se identifique.

            </p>
           <div className="subtitle">3. Sensibilidad del Mercado</div>
            <p>Para tener claridad de la sensibilidad del mercado usar la herramienta adjunta:</p>

        </Row>
        <Row className="img-map2"></Row>
        <Row>
            <p>La herramienta ayudará a clarificar las sensibilidades del mercado y contar con información del:</p>
            <ul>
                <li>El nivel de interés externo</li>
                <li>Las sensibilidades que nosotros queremos evadir o manejar.</li>
            </ul>

        </Row>
        <Row>
            <div className="subtitle"> 4. Análisis del Impacto</div>
            <p>Los incidentes y crisis probablemente afectarán a una amplia gama de personas y grupos de los sectores privado y público. Para manejar una crisis de manera efectiva, se tiene que entender cómo la van a ver ellos - sus percepciones - y la forma en que va a impactarlos.
                Para el análisis del impacto usar la siguiente herramienta:
            </p>
        </Row>
        <Row className="img-map3"></Row>
        <Row>
            <p>Una vez que el análisis esté completo establecer claramente:</p>
            <ul>
                <li>El impacto en todo el negocio.</li>
                <li> Las acciones y/o los mensajes para satisfacer las necesidades de los accionistas externos. Dentro de estas acciones determinar las actividades cruciales</li>

            </ul>
            <p>  Durante su aplicación identificar las actividades cruciales. Las actividades cruciales contienen el incidente o la crisis, o nos equipan para responder rápidamente cuando tenemos una visión más clara de la situación.</p>


        </Row>
    </Container>

)


export default Anexo3
