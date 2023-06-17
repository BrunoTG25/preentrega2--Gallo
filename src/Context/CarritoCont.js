import { useState, createContext } from "react";


export const carritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);
    const [total , setTotal] = useState(0);
    const [cantidadTotal , setCantidadTotal] = useState(0);
    
    //Agregar Prod
    const agregarProducto = (item, cantidad) =>{
        const productoExistente = carrito.find (prod => prod.item.id === item.id)

        if (!productoExistente){
            setCarrito(prev => [...prev, {item,cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }else{
            const carritoAct = carrito.map(prod =>{
                if (prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                }else{ 
                    return prod
                }
            });
            setCarrito (carritoAct);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }

    //Eliminar Prod:
    const eliminarProducto = (id) =>{
        const prodEliminado = carrito.find (prod => prod.item.id === id);
        const carritoAct = carrito.filter (prod => prod.item.id !== id);
        setCarrito(carritoAct);
        setCantidadTotal(prev => prev - prodEliminado.cantidad);
        setTotal (prev => prev - (prodEliminado.item.precio * prodEliminado.cantidad));
    }

    //Vaciar cart:

    const vaciarCarrito = () =>{
        setCarrito ([]);
        setCantidadTotal (0);
        setTotal(0);
    }
    

    return (
        <carritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
            {children}

        </carritoContext.Provider>
    )
} 