import React from 'react'

const Steps = (
    {
      number, label1 , label2
    }
) => (
        <div>
            <h5 className="align-embol"><span className="embol-line-height">MANEJO DE</span> INCIDENTES Y</h5>
            <h5 className="align-embol"><span className="embol-line-height">RESOLUCION</span> DE CRISIS </h5>
            <div className="embol-steps">
                <div className="step-container">
                    PASO
                </div>
                <div className="step-number">{number}</div>
            </div>
            <h1 className="align-embol embol-line-height">{label1}</h1>
            <h1 className="align-embol">{label2}</h1>
        </div>
)


export default Steps