import Link from 'next/link'
import styles from './botonIngresar.css'
export default function BotonIngresar({texto,root}){
    return(
        <Link href={root} className='btnIngresar'>{texto}</Link>
    )
}