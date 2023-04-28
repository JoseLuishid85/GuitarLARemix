import { useOutletContext } from '@remix-run/react' 
import styles from '../styles/carrito.css'

export function links(){
    return {
        rel: 'stylesheet',
        href: styles
    }
}
export function meta(){
    return{
        title: 'GuitarLA - Carrito de compra',
        description: 'Venta de guitarras, musica, Blog'
    }
}

function Carrito() {

    //const { carrito } = useOutletContext();
    //console.log(carrito);

    return (
        <main className="contenedor">
            <h1 className="heading" >Carrito de  Compra</h1>
            
            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>

                <aside className='resume'>
                    <h3>Resumen del Pedido</h3>
                    <p>Total a Pagar</p>
                </aside>
            </div>
        </main>
    )
}

export default Carrito