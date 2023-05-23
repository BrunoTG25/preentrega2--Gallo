import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asynckmock'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
  const [productos , setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(() => {

    const funProductos= idCategoria? getProductosPorCategoria : getProductos;

    funProductos(idCategoria)
      .then(res => setProductos(res) )
      .catch(error => console.error(error))
  }, [idCategoria])

  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer