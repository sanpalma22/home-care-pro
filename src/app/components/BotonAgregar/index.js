import Link from 'next/link'
import styles from './botonAgregar.css'
export default function BotonAgregar({texto,root}){
    return(
        <Link href={root} className='btnAgregar'>{texto}</Link>
    )
}