import imagen from '../../public/img/nosotros.jpg'
import stylesNosotros from '../styles/nosotros.css'

export function links(){
    return[
        {
            rel: 'StyleSheet',
            href: stylesNosotros
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

export function meta(){
    return(
        {
            title: 'Guitarla - Nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    )
}



function Nosotros() {

    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt='Imagen sobre nosotros' />

                <div>
                    <p>
                        Aliquam ultricies, turpis in sagittis malesuada, mi neque accumsan dui, a efficitur turpis sem at neque. 
                        Nulla sit amet sodales sapien, ac luctus enim. Phasellus dictum, nisl rhoncus pharetra euismod, nisl augue 
                        ornare magna, in hendrerit augue nisl at libero. Pellentesque malesuada ex sed nisl accumsan, at luctus diam 
                        vehicula. Vestibulum id nisl lorem. Mauris ac mauris porta, convallis dui at, finibus orci. Proin placerat, 
                        ex eget vestibulum pulvinar, turpis sem sollicitudin magna, at imperdiet ex felis eget dui. Integer mollis 
                        purus vel arcu lacinia sodales. Fusce leo magna, ornare id rutrum iaculis, sodales id ante. Vestibulum 
                        semper efficitur nibh eu ultricies. Vivamus tristique pharetra sagittis. Maecenas interdum elit eu lacus 
                        imperdiet finibus. 
                    </p>
                </div>
            </div>
        </main>

        
    )
}

export default Nosotros