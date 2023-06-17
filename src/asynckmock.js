const productos = [
    { nombre : " Dead Island 2 ", precio: 15000, stock : 10 , id: "1" , img: "../images/400_400-Dead-Island-2-Amazon_08-17-22_2.jpg" , idCat:"4"},
    { nombre : " Hogwarts ", precio: 17000 , stock : 10 , id: "2" , img: "../images/400_400-hogarts-ps4.jpg", idCat:"4" },
    { nombre : " Good of War Ragnarok ", precio: 19000, stock : 10 , id: "3" , img: "../images/1019-producto-god-of-war-ragnarok-5986.jpg", idCat:"4" },
    { nombre : " Black 4 Blood ", precio: 14500, stock : 10 , id: "4" , img: "../images/Black 4 blood PS4.webp", idCat:"4"}, 
    { nombre : " Lego Jurassic world ", precio: 13000, stock : 10 , id: "5" , img: "../images/juego-ps4-lego-jurassic-world-fisico-original.jpg", idCat:"4" },
    { nombre : " GTA V ", precio: 25000, stock : 10 , id: "6" , img: "../images/GTA.jpg", idCat:"5" },
    { nombre : " Resident Evil 4 ", precio: 23000, stock : 10 , id: "7" , img: "../images/Residen evil.jpg", idCat:"5" },
    { nombre : " Crash ", precio: 24000, stock : 10 , id: "8" , img: "../images/Crash.jpg", idCat:"5" },
    { nombre : " Wild Hearts ", precio: 22000, stock : 10 , id: "9" , img: "../images/Wild Hearts.jpg", idCat:"5" },
    { nombre : " Returnal ", precio: 24500, stock : 10 , id: "10" , img: "../images/1619742563-returnal-ps5.jpg", idCat:"5" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar que nos retorna un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}