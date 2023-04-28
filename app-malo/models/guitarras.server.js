export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const resultado = await respuesta.json()

    return resultado
}

export async function getGitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json()

    return resultado
}

export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const resultado = await respuesta.json()

    return resultado
}

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json()

    return resultado
}

export async function getCurso(){
    const repuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
    const resultado = await repuesta.json()

    return resultado
}