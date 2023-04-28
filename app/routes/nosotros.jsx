import { useOutletContext } from '@remix-run/react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
    return{
        title: 'GuitarLA - Nosotros',
        description: 'Venta de Guitarras, Blog de musica'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href:imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {

    return (
        <main className='contenedor nosotros'>
            <h2 className='heading' >Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt='Imaen de Nosotros' />

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis culpa maxime ipsam nostrum, minima explicabo in, porro excepturi ratione odit minus omnis asperiores ut at tempore? Consequuntur eveniet repellat, officiis velit possimus soluta dolorem nobis culpa voluptas quae sequi quo aut eligendi architecto optio harum cupiditate? Tempora, quibusdam vel?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis culpa maxime ipsam nostrum, minima explicabo in, porro excepturi ratione odit minus omnis asperiores ut at tempore? Consequuntur eveniet repellat, officiis velit possimus soluta dolorem nobis culpa voluptas quae sequi quo aut eligendi architecto optio harum cupiditate? Tempora, quibusdam vel?</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros