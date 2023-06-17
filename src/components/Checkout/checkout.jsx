import { useState, useContext } from "react";
import { carritoContext } from "../../Context/CarritoCont";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const {carrito, vaciarCarrito} = useContext(carritoContext);
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [email, setEmail] = useState ("");
    const [emailConfirmacion, setEmailConfirmacion] = useState ("");
    const [error, setError] = useState ("");
    const [ordenId, setOrdenId] = useState ("");


    const manejadorForm = () =>{
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError (" Los campos son obligatorios")
            return;
        }

        if (email !== emailConfirmacion){
            setError ("Los campos del email deben coincidir")
            return;
        }

        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: carrito.reduce((total, prod) => total + prod.item.precio * prod.cantidad, 0) ,
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async(productoOrden) =>{
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc (productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )

            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito()
                    })
                    .catch((error) => {
                        console.log ("error al crear la orden ", error);
                        setError("se produjo un error al crear la orden ");
                    })
            })
            .catch ((error) => {
                console.log ("Error al actualizar Stock", error);
                setError ("Se produjo un error al actualizar el Stock de los productos ")
            })
    }

  return (
    <div>
       <h2> Checkout</h2>
       <form onSubmit={manejadorForm} className="form">
            {carrito.map(prod => (
                <div key={prod.item.id}>
                    <p>
                        {prod.item.nombre} x {prod.cantidad}
                    </p>
                    <p> Precio $: {prod.item.precio} </p>
                    <hr />
                </div>
            ))}
            <hr />

                <div className="form-style">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre (e.target.value)}/>
                </div>

                <div className="form-style">
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido (e.target.value)}/>
                </div>

                <div className="form-style">
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono (e.target.value)}/>
                </div>

                <div className="form-style">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail (e.target.value)}/>
                </div>

                <div className="form-style">
                    <label htmlFor="">Email Confirmacion</label>
                    <input type="email"  value={emailConfirmacion} onChange={(e) => setEmailConfirmacion (e.target.value)}/>
                </div>

                {error && <p style={{color: "red"}}> {error} </p>}
                <button type="submit"> Finalizar Compra</button>
       </form>
       {
        ordenId && (
            <strong>Gracias por tu compra. Tu numero de orden es {ordenId} </strong>
        )
       }
    </div>
  )
}

export default Checkout
