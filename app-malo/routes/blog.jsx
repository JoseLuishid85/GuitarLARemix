import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/guitarras.server"
import styles from "../styles/blog.css"
import ListadoPosts from "../components/Listado-posts"

export async function loader(){
    const posts = await getPosts()
    return posts.data
}

export function meta({data}){

    if(!data){
        return {
            title: `Guitarla - Blog no encontrada`,
            description: `Blog no encontrada`
        }
    }

    return {
        title: `Guitarla - Nuestro Blog`,
        description: `GuitarLA - Blog`
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Blog() {

    const posts = useLoaderData()

    return (
        <main className="contenedor">
            <ListadoPosts posts={posts}/>
        </main>
    )
}

export default Blog