import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import myData from './nacional.json';

export default class ContactsSantacruz extends React.Component  {
    constructor(props) {
        super(props);
        this.consulta1= myData.filter(function (c) {
            return c.depto==="Santa Cruz";
        });
    }




    drawRows(){
        return(
            <tbody>
            {this.consulta1.map(data=>{
                return(
                    <tr>
                        <td>{data.Responsabilidad}</td>
                        <td>{data.Nombre}</td>
                        <td>
                            {data.Mail}
                        </td>
                        <td>{data.Interno}</td>
                        <td>{data.Celular}</td>
                    </tr>
                );
            })}
            </tbody>
        );
    }

    render() {

        return (

            <div className="contacts">
                <h5>CONTACTOS IMCR - SANTA CRUZ</h5>
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

