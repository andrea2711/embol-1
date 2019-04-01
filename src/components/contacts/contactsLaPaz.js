import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import myData from './nacional.json';

export default class ContactsLapaz extends React.Component  {
    constructor(props) {
        super(props);
        this.btnTitular= this.btnTitular.bind(this);
        this.btnSuplente= this.btnSuplente.bind(this);
        this.state = {
            consulta:myData.filter(function (c) {
                return c.depto==="La paz";
            })
        };

    }

    btnTitular() {
        this.setState({
                consulta : this.state.consulta= myData.filter(function (c) {
                    return c.depto==="La paz";
                }).filter(function (c) {
                    return c.CARGO === "TITULAR";
                })

            }, ()=>(this.state.consulta)

        );
    };

    btnSuplente() {
        this.setState({
                consulta : this.state.consulta= myData.filter(function (c) {
                    return c.depto==="La paz";
                }).filter(function (c) {
                    return c.CARGO === "SUPLENTE";
                })

            }, ()=>(this.state.consulta)

        );

    };


    drawRows(){
        return(
            <tbody>
            {this.state.consulta.map(data=>{
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
                <h5>CONTACTOS IMCR - La paz </h5>
                <ButtonGroup>
                    <Button onClick={this.btnTitular}>TITULAR</Button>
                    <Button onClick={this.btnSuplente} >SUPLENTE</Button>
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

