import { useLoaderData } from "@remix-run/react"
import { getPost } from "../../models/guitarras.server"
import { formatiarFecha } from "../../utils/helpers"
import styles from "../../styles/blog.css"

export async function loader({params}){
    
    const { url } = params
    console.log(url)
    const post = await getPost(url)
    
    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Blog no encontrada'
        })
    }
    
    return post
}

export function meta({data}){

    if(!data){
        return {
            title: `Guitarla - Blog no encontrada`,
            description: `Blog no encontrada`
        }
    }

    return {
        title: `Guitarla - ${data.data[0].attributes.titulo}`,
        description: `GuitarLA - Blog ${data.data[0].attributes.titulo}`
    }
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function PostUrl() {

    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt  } = post.data[0].attributes

    return (
        <article className="contenedor post mt-3">
            <img className="imagen" src={imagen.data.attributes.url} alt="Imagen del Blog" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha" >{formatiarFecha(publishedAt)}</p>
                <p className="texto" >{contenido}</p>
            </div>
        </article>
    )
}

export default PostUrl