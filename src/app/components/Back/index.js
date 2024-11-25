"use client";
import { useRouter } from 'next/navigation'
import styles from './back.module.css'
export default function Back () {
    const router = useRouter();
    return(
        <button className={styles.back} onClick={()=>router.back()}>
            <div>
                <p>Atrás</p>
                <p>&lt;</p>
            </div>
        </button>
    )
}