import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import myData from './KO.json';

export default class Contacts extends React.Component  {

drawRows(){
   return(
       <tbody>
          {myData.map(data=>{
              return(
                  <tr>
                      <td>{data.AREAS}</td>
                      <td>{data.TITULAR}</td>
                      <td>{data.MAIL}</td>
                      <td>
                          <div>{data.TELEFONO1}</div>
                          <div>{data.TELEFONO2}</div>
                      </td>
                      <td>{data.SUPLENTE}</td>
                      <td>{data.MAILs}</td>
                      <td>
                          <div>{data["TELEFONO S1"]}</div>
                          <div>{data["TELEFONO S2"]}</div>
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
        <h5>CONTACTOS IMCR - NACIONAL</h5>
        <ButtonGroup>
            <Button>TITULAR</Button>
            <Button>SUPLENTE</Button>
        </ButtonGroup>
        <table className="contact-table">
            <thead>
            <tr>
                <th>Posici&oacute;n</th>
                <th>titular</th>
                <th>MAIL</th>
                <th>tel&eacute;fono</th>
                <th>1 suplente</th>
                <th>MAIL</th>
                <th>tel&eacute;fono</th>
            </tr>
            </thead>

            {this.drawRows()}

        </table>
    </div>
        )}
}

