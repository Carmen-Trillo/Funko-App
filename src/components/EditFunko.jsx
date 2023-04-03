import { useLoaderData } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import FunkoHandler from '../handler/funkoHandler';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import "../style/Form.css"

function EditFunko() {
    const { funko } = useLoaderData();
    const id = funko.id;
    const [name, setName] = useState(funko.name);
    const [img, setImg] = useState(funko.img);
    const [value, setValue] = useState();

    const handleImageChange = (event) => {
        const picture = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(picture);
        reader.onload = () => {
            setImg(reader.result);
        };
    };

    const handleNameChange = (event) => {
        let nameInput = event.target.value;
        setName(nameInput);
    };

    const [message, setMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let updatedFunko= {name, img};
        await FunkoHandler.updateFunko(id, updatedFunko);
        setMessage("El Funko ha sido modificado en la lista.");
        setShowMessage(true);
        setValue("name", "");
        setValue("img", "");
      };
    
      const handleCloseMessage = () => {
        setShowMessage(false);
      };

  return (
    <>
    <div id="myForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <br></br>
          <label className='name' htmlFor="name" id="name">¿Cuál es el funko que quieres modificar?</label>
          <br></br>
          <input onChange={handleNameChange} id="name" placeholder={funko.name} />


          <br></br>

          <input id="img" placeholder='Foto del Funkho' type="file" onChange={handleImageChange} />
          
          <br></br>

          <div id="button">
          <input id="submit" type="submit" value="GUARDAR" />
          <Link to="/"><input id="return" type="button" value="VOLVER" /></Link>
          </div>
    
        </fieldset>
      </form>
    </div>
    {showMessage && (
      <div>
        {message}
        <button onClick={handleCloseMessage}>Cerrar</button>
      </div>
)}

    </>
  );

}

export default EditFunko
