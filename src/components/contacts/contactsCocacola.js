import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import myData from './KO2.json';

export default class ContactsCocacola extends React.Component  {
    constructor(props) {
        super(props);
        this.consulta1= myData

    }




    drawRows1(){
        return(

                <tbody>
                {this.consulta1.map(data=>{
                    return(
                        <tr>
                            <td>{data.AREAS}</td>
                            <td>{data.TITULAR}</td>
                            <td>{data.MAIL} </td>
                            <td>
                                <div>
                                    {data.TELEFONO1}
                                </div>
                                <div>
                                    {data.TELEFONO2}
                                </div>
                            </td>

                                <td>{data.SUPLENTE}</td>
                                <td>{data.MAIL} </td>
                                <td>
                                    <div>
                                        {data.TELEFONOS1}
                                    </div>
                                    <div>
                                        {data.TELEFONOS2}
                                    </div>
                                </td>
                        </tr>
                    );
                })}

                </tbody>
        );
    }


    render() {

        return (

            <div className="contacts">
                <h5>CONTACTOS IMCR - COCA-COLA</h5>
                <ButtonGroup>
                    <Button>TITULAR</Button>
                    <Button>SUPLENTE</Button>
                </ButtonGroup>
                <div className="contactContain">

                    <div className="cocacolatable">
                        <table className="contact-table">
                            <thead>
                            <tr>
                                <th>área</th>
                                <th>titular</th>
                                <th>MAIL</th>
                                <th>tel&eacute;fono</th>
                                <th>suplente</th>
                                <th>MAIL</th>
                                <th>tel&eacute;fono</th>
                            </tr>
                            </thead>

                            {this.drawRows1()}

                        </table>
                    </div>
                </div>
            </div>
        )}
}

