"use client";

import { useRouter } from 'next/navigation'

export default function Back () {
    const router = useRouter();
    return(
        <button onClick={()=>router.back()}>Atrás</button>
    )
}