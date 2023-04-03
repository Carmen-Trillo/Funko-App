import Editar from '../assets/img/editar.png';
import Borrar from '../assets/img/borrar.png';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FunkoHandler from '../handler/funkoHandler';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import '../../src/index.css';
import "../style/Funkos.css"

export default function FunkoList() {
    const {id} = useParams();
    const [funkos, setFunkos] = useState([]);

    useEffect(() => {
        getData();
      }, []);

    const getData = async () => {
        const data = await FunkoHandler.loadFunkos();
        setFunkos(data);
      };

      const deleteShort = async (id) => {
        setFunkos(funkos.filter((p) => p.id !== id));
        await FunkoHandler.deleteFunko(id);
      };

    console.log(funkos)

    if (funkos.length === 0) {
        // return <div>Loading...</div>;
    }

    return (
        <div id="container">
            <div>
            {funkos.map(item => (
                <div id='card'
                    key={item.id}>
                    <ListGroup as="ul" numbered className='list'>
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-start element"
                            >
                            <div className="ms-2 me-auto container">
                                <div className="fw-bold name">
                                    <h3>{item.name}</h3>
                                </div>
                                <div>
                                    <Link to={`/editFunko/${item.id}`}>
                                        <Button className='buttonCard' id='edit' variant="outline-light"><img className='icons'src={Editar} alt="editar funko"/></Button>
                                    </Link>
                                    <Button className='buttonCard' onClick={() => deleteShort(item.id)} variant="outline-light"><img className='icons' src={Borrar} alt="eliminar funko"/></Button>
                                </div>
                            </div>
                                <div>
                                    <img src={item.img} alt={item.name} />
                                </div>
                            
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            ))}
            </div>
        </div>
    )
}


