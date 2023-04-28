import { Link } from "@remix-run/react"
import { formatiarFecha } from "../utils/helpers"

function Post({post}) {

    const { contenido,imagen, titulo, url, publishedAt } = post 
    return (
        <article className="post">
            <img className="imagen" src={imagen.data.attributes.formats.small.url} alt="Imagen del Blog" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha" >{formatiarFecha(publishedAt)}</p>
                <p className="resumen" >{contenido}</p>
                <Link className="enlace" to={`/posts/${url}`} >Leer Más</Link>
            </div>
        </article>
    )
}

export default Post