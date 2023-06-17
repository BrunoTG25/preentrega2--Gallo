import { carritoContext } from "../../Context/CarritoCont"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(carritoContext);
    if(cantidadTotal === 0){
        return (
            <>
                <h2>No hay Productos en el Carrito</h2>
                <Link to={'/'}> Ver Productos</Link>
            </>
        )
    }
  return (
    <div>
      
        {carrito.map (producto => <CartItem key={producto.id} {...producto}/>)}
        <h3>Total: ${total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        <Link to={'/checkout'}> Finalizar Compra </Link>

    </div>
  )
}

export default Cart
