import { useContext } from "react"
import { carritoContext } from "../../Context/CarritoCont"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(carritoContext);
  return (
    <div>
        <h3>{item.nombre}</h3>
        <p>Cantidad : {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem
