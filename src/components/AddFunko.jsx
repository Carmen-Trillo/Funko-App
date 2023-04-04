import { useForm } from 'react-hook-form';
import React from 'react';
import FunkoHandler from '../handler/funkoHandler';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import "../style/Form.css"

function AddFunko() {
  //Estoy usando useForm de react, lo que hace que determinadas cosas vengan cargadas por defecto en la siguiente línea
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  //Identifica el evento de insertar la imagen, con id="img" y la convierte en imagen base64 para que la pueda gestionar correctamente la API. En el formulario llamamos a esta función dentro del input de la imagen.
  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("img", reader.result);
      console.log(picture)
    };
  }

  //Para los mensajes que se muestran tras insertar los elementos
  const [message, setMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);

  //Definimos onSubmit con la petición de Add a la función Handler y lo demás es para mostrar el mensaje y para la carga de la imagen y el nombre del Funko. En el formulario llamamos a OnSubmit
  const onSubmit = (data) => {
    FunkoHandler.addFunko(data);
    setMessage("El Funko ha sido añadido a la lista.");
    setShowMessage(true);
    setValue("name", "");
    setValue("img", "");
  };

  //Para la función de cerrar el mensaje de Funko guardado
  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
    <div id="myForm" style={{height:'57vh'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <br></br>
          <label style={{fontSize: '50px'}} className='name' htmlFor="name" id="name">¿Cuál es el funko que quieren los niños?</label>
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
