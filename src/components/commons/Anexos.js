import React from 'react'

const Anexo = (
    {
        number, label1
    }
) => (
    <div>
        <h5 className="align-embol">PAUTAS PARA ENTENDER</h5>
        <h5 className="align-embol">INCIDENTES </h5>
        <div className="embol-anexo">
            <div className="step-container">
                ANEXO {number}
            </div>

        </div>
        <h3 className="align-embol">{label1}</h3>
    </div>
)


export default Anexo