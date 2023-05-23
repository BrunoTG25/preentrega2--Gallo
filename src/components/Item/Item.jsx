import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imagenProducto' src= {img} alt= {nombre} />
        <h2> Nombre: {nombre} </h2>
        <p> Precio: {precio} </p>
        <p>id: {id} </p>
        <Link className='link' to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item 