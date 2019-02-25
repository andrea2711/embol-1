import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import myData from './KO.json';
import myData from './KO2.json';

export default class ContactsCocacola extends React.Component  {
    constructor(props) {
        super(props);
        this.consulta1= myData.filter(function (c) {
            return c.TITULAR-ON=== true;
        });
    }




    drawRows(){
        return(
            <tbody>
            {this.consulta1.map(data=>{
                return(
                    <tr>
                        <td>{data.POSITION}</td>
                        <td>{data.TITULAR}</td>
                        <td>
                            {data.MAIL}
                        </td>
                        <td>{data.TELEFONO1}</td>
                        <td>{data.TELEFONO2}</td>
                    </tr>
                );
            })}
            </tbody>
        );
    }

    render() {

        return (

            <div className="contacts">
                <h5>CONTACTOS IMCR - NACIONAL</h5>
                <ButtonGroup>
                    <Button>TITULAR</Button>
                    <Button>SUPLENTE</Button>
                </ButtonGroup>
                <div className="contactContain">
                <table className="contact-table">
                    <thead>
                    <tr>
                        <th>Responsabilidad</th>
                        <th>Nombre</th>
                        <th>MAIL</th>
                        <th>interno</th>
                        <th>tel&eacute;fono</th>
                    </tr>
                    </thead>

                            {this.drawRows()}

                </table>
                </div>
            </div>
        )}
}

