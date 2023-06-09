import Editar from '../assets/img/editar.png';
import Borrar from '../assets/img/borrar.png';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FunkoHandler from '../handler/funkoHandler';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import '../../src/index.css';
import "../style/Funkos.css"

export default function FunkoList() {
    //useState permite tener variables de estado en componentes funcionales
    const {id} = useParams();
    const [funkos, setFunkos] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    //llamamos al método GET de la función Handler
    const getData = async () => {
        const data = await FunkoHandler.loadFunkos();
        setFunkos(data.map(funko => ({ ...funko, bought: false }))); // Initialize bought state to false for each funko
    };

    //llamamos al método DELETE de la función Handler
    const deleteShort = async (id) => {
        setFunkos(funkos.filter((p) => p.id !== id));
        await FunkoHandler.deleteFunko(id);
    };

    //llamamos al método PATCH de la función Handler para actualizar el elemento Comprado en el checkbox
    const toggleBought = async (id, bought) => {
        const updatedFunko = { id, bought };
        await FunkoHandler.updateFunko(id, updatedFunko);
        setFunkos(funkos.map(funko => funko.id === id ? { ...funko, bought } : funko));
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
                                <div className='check'>
                                    <label id='pCheck' htmlFor={`bought-${item.id}`}>Comprado</label>
                                    <input
                                        type="checkbox"
                                        id={`bought-${item.id}`}
                                        checked={item.bought}
                                        onChange={() => toggleBought(item.id, !item.bought)}
                                    />
                                </div>
                            </div>
                                <div id='photo'>
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


