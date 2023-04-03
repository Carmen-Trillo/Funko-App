import '../style/Header.css'
import '../../src/index.css'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Add from '../assets/img/add.png'

export default function Header() {
    return (
        <div>
            <h1>Funko Pop Para Los Niños!</h1>
            <Link variant="outline-light" to={`/AddFunko`}><Button id='buttonNav' variant="outline-light"><img src={Add} alt="añadir funko"/><p>  Funko</p></Button></Link>
        </div>
    )
}