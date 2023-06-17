import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { carritoContext } from '../../Context/CarritoCont'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img , stock, descripcion}) => {
  const [agregarCantidad , setAgregarCantidad] = useState (0)
  const {agregarProducto} = useContext (carritoContext);

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio};
    agregarProducto(item, cantidad);
  }
  return (
    <div className='contItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio : {precio}</h3>
        <h3>Id: {id}</h3>
        <p>Descripcion: {descripcion}</p>
        <img src= {img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (< ItemCount inicial={1} 
            stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail