import React from 'react'
import  {Container,Row,Col} from 'reactstrap'


const Anexo2 = () => (
    <Container className="NuevosAnexos">
        <Row>
            <h1>LINEAMENTOS PARA LAS HERRAMIENTAS DE ANÁLISIS DE INCIDENTES</h1>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                PREGUNTAS PARA TENER EN CUENTA
            </Col>
            <Col >
                RAZÓN DE SER
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Qué ha ocurrido o que ha salido mal?
                Documente una breve descripción del incidente
            </Col>
            <Col >
                <ul>
                    <li> Breve descripción de lo que ocurrió; lo que sabemos sobre la naturaleza del problema, si bien es posible que no obtengamos todos los hechos en el informe inicial del incidente.</li>
                    <li>Los informes iniciales pocas veces incluyen toda la información; por lo tanto, obtenga y valide la mayor cantidad de hechos posibles y hágalo rápidamente.</li>
                    <li>La información inicial, como “quién, qué, cuándo, dónde, por qué y cómo”, puede ser muy útil en este momento.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            1. Naturaleza del Incidente
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Cuál es la naturaleza del problema?
                ¿Cuáles son las inquietudes o emociones que se podrían generar para las partes interesadas externas claves?
            </Col>
            <Col >
                <ul>
                    <li>
                        Mirar primero los incidentes bajo una perspectiva externa, después la perspectiva interna. La perspectiva externa es más difícil de manejar.¿ Está la naturaleza del problema centrada en la confianza en que la empresa hará lo correcto para los principales interesados? Muchos incidentes se conviertan en crisis, si se percibe que la empresa no está haciendo lo correcto.
                    </li>
                    <li>
                        Según los mercados y activos que se ven impactados? ¿Con qué rapidez se verán afectadas las audiencias externas? La velocidad actual de los medios sociales y mundiales pueden provocar que el incidente se expanda a otros mercados de manera muy rápida.
                    </li>

                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Con qué rapidez podrían surgir dichas inquietudes o emociones?
                ¿Cómo podrían surgir?
            </Col>
            <Col >
                <ul>
                    <li>
                        La velocidad de los medios sociales puede provocar que las inquietudes surjan de manera rápida y a nivel mundial. Controlar los medios en todas sus formas es esencial.
                    </li>
                   </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            2. Magnitud del Incidente
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Qué activos se ven afectados? (Por ejemplo, una categoría de activo, una unidad de mantenimiento de inventario [Stock Keeping Unit, SKU], todas las marcas, la imagen, la reputación, etc.)
            </Col>
            <Col >
                <ul>
                    <li>
                        Nuestro activo intangible más valioso es la imagen y reputación de nuestro negocio. Nuestro interés a largo plazo depende de la calidad de nuestros productos y de la integridad de nuestro negocio.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Qué mercados se ven afectados? (por ejemplo, el mercado local, nacional, regional, mundial, etc.)
            </Col>
            <Col >
                <ul>
                    <li>
                        Coca-Cola es una marca mundial. Lo que inicialmente puede parecer un incidente local se puede convertir rápidamente en un incidente mundial, especialmente, si afecta la imagen y reputación de nuestros productos o de nuestro negocio.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            3. Soluciones potenciales
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Sabemos a ciencia cierta qué es lo que salió mal?
               <li>
                   ¿Qué hechos conocemos?
               </li>
                <li>¿Qué hechos necesitamos conocer?</li>
                <li>¿Cómo y dónde los obtenemos?</li>
                <li>¿Con qué rapidez podemos obtenerlos?</li>
            </Col>
            <Col >
                <ul>
                    <li>
                        No especule. Si no sabe que salió mal, dígalo y comprométase a encontrar respuestas. Trabaje con hechos, sin especular ni presuponer.
                    </li>
                    <li>
                        Asegúrese de que contemos con las personas y los recursos adecuados para obtener las respuestas que necesitamos.

                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">

                ¿Contamos con una solución empresarial eficaz?
                ¿Con qué rapidez podemos implementarla?
            </Col>
            <Col >
                <ul>
                    <li>
                        Es posible que necesitemos una solución a corto plazo para abordar el incidente.
                    </li>
                    <li> Identifique una solución a largo plazo para problemas sistemáticos (si fuera necesario).
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Contamos con un plan de contingencia?
                ¿Con qué rapidez podríamos implementarlo?
                ¿Qué necesitamos para implementarlo?
            </Col>
            <Col >
                <ul>
                    <li>
                        Identificar y desarrollar planes de contingencia nos permite actuar de manera más decisiva cuando sea necesario.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            4. Susceptibilidades del mercado
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿El perfil de los incidentes como éste es alto en los mercados afectados?
                ¿Se han registrado incidentes similares?
                ¿Qué susceptibilidades debemos controlar?
                ¿Cuál es el nivel de interés externo?

            </Col>
            <Col >
                <ul>
                    <li>
                        Tenga muy en cuenta las condiciones locales y especialmente, las susceptibilidades (y percepciones) relacionadas con el incidente, el activo, etc. para evitar que, sin querer hacerlo, llamemos más la atención o aumentemos una exposición no deseada del incidente.

                    </li>
                    <li>
                        Sea consciente de que es posible que las partes interesadas externas tengan más presentes estos tipos de incidentes y, por lo tanto, puedan estar más interesados o ser extremadamente sensibles a los aspectos del incidente que estamos manejando.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿El perfil del sistema de Coca-Cola, sus marcas y sus productos es alto en los mercados afectados?
            </Col>
            <Col >
                <ul>
                    <li>
                        Sea consciente de cómo se percibe el sistema de Coca-Cola en los mercados afectados y, por lo tanto, la manera en que las partes interesadas pueden interpretar nuestra acción o inoperancia.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Quiénes son las partes interesadas clave afectadas por este incidente?
                <li>Consumidores y público en general</li>
                <li>Clientes y socios comerciales</li>
                <li>Empleados</li>
                <li> Agencias gubernamentales/ reguladoras</li>
                <li>Grupos de interés especial/ONG</li>
                <li>Figuras políticas</li>
                ¿El entorno crea susceptibilidades especiales para las partes interesadas claves?

            </Col>
            <Col >
                <ul>
                    <li>
                        Comprenda como verán el incidente las partes interesadas claves y cuáles podrían ser sus intereses. Tenga en cuenta que estas partes interesadas pueden tener intereses y prioridades diferentes, que pueden coincidir o no con los nuestros. Busque conexiones en común.
                    </li>
                    <li>
                        Cree alianzas y trabaje con las partes interesadas clave para manejar el incidente.
                    </li>
                    <li>
                        Comprenda que empleados son parte interesada clave y, si cuenta con información adecuada, quienes podrían ser buenos embajadores de la Compañía.
                    </li>
                </ul>
            </Col>
        </Row>

        <Row className="NewSection title">
            5. Mejor resultado posible y peor escenario
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Cuál es el mejor resultado posible y como se resolvería este evento en función de nuestros intereses?
                ¿Cuál es el peor escenario y hasta qué punto podría empeorar?
                <li>¿En qué planes de contingencia también deberíamos pensar?</li>
                <li>¿Qué riesgos surgen de la situación o de nuestras soluciones potenciales?</li>
                <li>¿Cuál es el “escenario más probable”?</li>


            </Col>
            <Col >
                <ul>
                    <li>
                        Llegue al escenario más probable, teniendo en cuenta el peor. Por ejemplo; tener que retractarse de una declaración previa podría provocar pérdida de credibilidad.

                    </li>
                    <li>
                        Considere los riesgos más amplios para el negocio que genera el incidente y además, los riesgos que nuestras acciones propuestas podrían provocar: el riesgo de consecuencias “imprevistas”.
                    </li>
                    <li>
                        Según sea posible, identifique estrategias para abordar cada uno de sus escenarios.

                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            6. Análisis del impacto y expectativas de las partes interesadas
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Cómo impactará este incidente en todas nuestras partes interesadas clave relevantes?
                ¿Cuáles son las expectativas de nuestras partes interesadas clave?

                <li>¿Qué acciones debemos tomar para abordar estas expectativas?</li>
                <li>¿Cómo comunicamos estas acciones?
                </li>
            </Col>
            <Col >
                <ul>
                    <li>
                        Nuestra primera prioridad son la salud y seguridad de las personas.

                    </li>
                    <li>
                        Los incidentes se investigan activamente.
                    </li>
                    <li>
                        Las declaraciones son sinceras y se basan en hechos verificables.

                    </li>
                    <li>Se asume la responsabilidad de resolver el problema, independientemente de quien sea el culpable.
                    </li>
                    <li>Los Equipos de Manejo de Incidentes, cumplen con la ley y cooperan plenamente con las autoridades competentes.
                    </li>
                    <li>Los EMIs buscan el respaldo confiable de terceros para las acciones propuestas, según sea posible, para evitar que la actitud de la Compañía sea percibida como parcial.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Cuáles son los mensajes clave que debemos transmitir a las partes interesadas?

                <li>
                    ¿Cuál es su actitud (probable) ahora?

                </li>
                <li>
                    ¿Cuál debería ser esa actitud?
                </li>
                <li>
                    ¿Qué podemos hacer para lograr el cambio?
                </li>
            </Col>
            <Col >
                <ul>
                    <li>
                        La comunicación con las partes interesadas clave debe incluir la preocupación, el compromiso para resolver el problema y el trabajo con las partes interesadas y las autoridades competentes.

                    </li>
                    <li>
                        Asegúrese de que las comunicaciones para cada parte interesada clave indiquen claramente los planes específicos de acciones para abordar sus necesidades e inquietudes.
                    </li>
                    <li>
                        Las declaraciones son sinceras y se basan en hechos verificables.

                    </li>
                    <li>
                        Por último, nos gustaría que la actitud de nuestras partes interesadas clave refleje nuestros principios que se expresan en nuestros mensajes clave.                    </li>

                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            7. Estrategia de Administración de Incidentes
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">

                ¿Qué debemos defender?
                ¿Qué podemos comprometer?
                ¿Qué no podemos defender?
            </Col>
            <Col >
                <ul>
                    <li>
                        *La viabilidad a largo plazo del sistema Coca-Cola depende de la imagen y la reputación de nuestro negocio.

                    </li>
                    <li>
                        *Podemos a menudo comprometer los intereses financieros de corto plazo, si esto sirve a nuestros intereses a largo plazo
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            8. Estrategia de comunicación
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Qué sabemos?
                ¿Qué podemos decir?
                ¿Cuándo debemos comunicar?
                ¿Quién necesita el mensaje?
                ¿Dónde colocaremos nuestro mensaje?
                ¿Cómo crearemos y distribuiremos las comunicaciones?

            </Col>
            <Col >
                <ul>
                    <li>
                        El EMI multifuncional que trabaja en las herramientas de análisis del problema, susceptibilidades del mercado y análisis del impacto, es esencial para el proceso de desarrollo de la estrategia de comunicación.
                    </li>
                    <li>
                        Garantice que todo el equipo forme parte de este proceso. El desarrollo de mensajes y la estrategia de comunicaciones (similar al plan de acción o la estrategia de manejo de incidentes) no son responsabilidad exclusivas de Relaciones Publicas y Comunicaciones.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            9. Coordinación de la estrategia de manejo de incidentes
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Quién debe autorizarnos/ guiarnos antes de actuar?
                ¿Quién debe conocer las acciones que deseamos tomar?
            </Col>
            <Col >
                <ul>
                    <li>
                        La comunicación y coordinación con partes interesadas clave (particularmente las partes interesadas internas del Sistema de Coca-Cola) son fundamentales.
                    </li>
                    <li>
                        Los resultados del análisis de incidentes, la estrategia de manejo y las comunicaciones propuestas se deben compartir con las personas apropiadas de todo el sistema.
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            Otros lineamientos y consideraciones
        </Row>
        <Row className="NewSection title">
            10. Notificación del incidente
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">
                ¿Quién debe estar al tanto del incidente?
            </Col>
            <Col >
                <ul>
                    <li>
                        Todos los incidentes de Manejo de Incidentes y Resolución de Crisis (IMCR) se deben informar de manera oportuna a través de la herramienta de información y notificación IMCR.
                    </li>
                    <li>
                        Seguir el procedimiento SC-MI-P-01.01 para el proceso de notificación. A Coca-Cola solo puede comunicarle el vocero nacional.</li>
                </ul>
            </Col>
        </Row>
        <Row className="NewSection title">
            11. Recursos
        </Row>
        <Row className="NewSection">
            <Col className="ColSection">

                ¿Qué experiencia / recursos necesitamos interna y externamente para que nos ayuden a manjar este incidente?
            </Col>
            <Col >
                <ul>
                    <li>
                        Utilice la experiencia existente en todo el sistema de Coa-Cola (y, en algunos casos, externamente) para que lo ayuden a manejar el incidente de manera eficaz. Consulte con sus respectivos Equipos de Manejo de Incidentes Corporativos y Grupos para obtener experiencia y recursos adicionales.
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
)


export default Anexo2
