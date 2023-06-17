import { useContext } from 'react'
import { carritoContext } from '../../Context/CarritoCont'
import { Link } from 'react-router-dom'
import './CartWidget.css'


const CartWidget = () => {
  const {cantidadTotal} = useContext(carritoContext);
    const imgCarrito= "https://cdn-icons-png.flaticon.com/512/2698/2698303.png"
  return (
    <div>
      <Link to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }
      </Link> 
    </div>
  )
}

export default CartWidget