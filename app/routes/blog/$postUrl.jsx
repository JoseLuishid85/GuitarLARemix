import { useLoaderData } from "@remix-run/react";
import { getPost } from "../../models/posts.server"
import { formatearFecha } from "../../utils/helpers";


export function meta({data}){

    if(!data){
        return{
            title: 'GuitarLA - Post no encontrado',
            description: 'Guitarras, venta de guitarra, guitarra no encontrada'
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Post, venta de guitarra, guitarra ${data.data[0].attributes.titulo}`
    }
}

export async function loader({params}){

    const { postUrl } = params
    const post = await getPost(postUrl);

    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post
}

function Post() {

    const post = useLoaderData()
    const { titulo, imagen, publishedAt, contenido } = post.data[0].attributes

    return (
        <article className="post mt-3">
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='texto'>{contenido}</p>
            </div>
        </article>
    )
}

export default Post