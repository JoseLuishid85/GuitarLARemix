import { useLoaderData } from "@remix-run/react"
import { getGitarra } from "../../models/guitarras.server"
import { Response } from "@remix-run/node"

export async function loader({params}){
    
    const { url } = params
    const guitarra = await getGitarra(url)

    if(guitarra.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra
}

export function meta({data}){

    if(!data){
        return {
            title: `Guitarla - Guitarra no encontrada`,
            description: `Guitarra no encontrada`
        }
    }

    return {
        title: `Guitarla - ${data.data[0].attributes.nombre}`,
        description: `GuitarLA - Venta de guitarra ${data.data[0].attributes.nombre}`
    }
}

function Url() {

    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

    return (
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h1>{nombre}</h1>
                <p className="texto"> {descripcion}</p>
                <p className="precio">${precio}</p>
            </div>
        </div>
    )
}

export default Url