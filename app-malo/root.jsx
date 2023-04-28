//import { useState } from 'react'
import {
    Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link
} from '@remix-run/react'
import styles from './styles/index.css' //Tambien se puede colocar ~
import Header from './components/header'
import Footer from './components/footer'

export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'Guitarla - Remix',
            viewport: 'width=device-width, initial-scale=1'
        }
    )
}


export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){
    /*
    const [carrito,setCarrito] = useState([]);

    const agregarCarrito = guitarra =>{
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            //Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraSta =>{
                if(guitarraSta.id===guitarra.id){
                    //Reescribir la cantidad
                    guitarraSta.cantidad = guitarra.cantidad  //para cambiar la cantidad
                    //guitarraSta.cantidad += guitarra.cantidad //Para sumar a la cantidad
                }
                return guitarraSta
            })
            setCarrito(carritoActualizado)
        }else{
            setCarrito([...carrito, guitarra])
        }
    }*/

    return (
        <Document>
            <Outlet 
            /*
                context={{
                    agregarCarrito,
                    carrito
                }}*/
            />
        </Document>
    )
}

function Document({children}){
    return(
        <html>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}

                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}


/*** Manejo de errores ***/
export function CatchBoundary(){
    const error = useCatch()
    return (
        <Document>
            <p className='error' >{error.status} {error.statusText}</p>
            <Link className='error-enlace' to="/">Ir a la pagina Principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className='error' >{error.status} {error.statusText}</p>
            <Link className='error-enlace' to="/">Ir a la pagina Principal</Link>
        </Document>
    )
}