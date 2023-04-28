import { useLoaderData  } from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import ListadoGuitarras from '../components/Listado-guitarras'

export async function loader(){
    
    const guitarras = await getGuitarras()
    return guitarras.data
}

export function meta(){
    return {
        title: 'Guitarla - Tienda de Guitarras',
        description: 'GuitarLA - Nuestra colección de guitarras'
    }
}

function Tienda() {

    const guitarras = useLoaderData();
    console.log(guitarras)

    return (
        <main>
            <ListadoGuitarras  />
        </main>
    )
}

export default Tienda