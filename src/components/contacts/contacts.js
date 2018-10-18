import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';

const Contacts = () => (
    <div className="contacts">
    <h5>CONTACTOS IMCR - NACIONAL</h5>
        <ButtonGroup>
            <Button>TITULAR</Button>
            <Button>suplente</Button>
        </ButtonGroup>
        <table>
            <thead>
            <tr>
                <th>Responsabilidad</th>
                <th>nombre</th>
                <th>MAIL</th>
                <th>interno</th>
                <th>TELEFONO</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>LIDER DEL EMI</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
            </tr>
            </tbody>
        </table>
    </div>
)

export default Contacts
