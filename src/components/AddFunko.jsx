import { useForm } from 'react-hook-form';
import React from 'react';
import FunkoHandler from '../handler/funkoHandler';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import "../style/Form.css"

function AddFunko() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("img", reader.result);
      console.log(picture)
    };
  }

  const [message, setMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);


  const onSubmit = (data) => {
    FunkoHandler.addFunko(data);
    setMessage("El Funko ha sido añadido a la lista.");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <br></br>
          <label className='name' htmlFor="name" id="name">¿Cuál es el funko que quieren los niños?</label>
          <br></br>
          <input id="name" placeholder='Anota el funko que quieren los niños' {...register("name", { required: true })} />
          {errors.name && <span>Indica el Funko que hay que comprar</span>}

          {/* <input id="bought" placeholder='bought' type="checkbox" value="True" className="inline" {...register("bought")} />
          <label htmlFor="exchange" id="boughtLabel">¿Comprado?</label> */}

          <br></br>

          <input id="img" placeholder='Foto del Funkho' type="file" onChange={handleImageChange} />
          {errors.img && <span>Debe rellenar este campo</span>}
          
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

export default AddFunko
