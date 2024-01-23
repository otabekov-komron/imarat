'use client'
import { error } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Error() {
    const [lang, setLang] = useState()
    useEffect(() => {
        const getLang: any = localStorage.getItem('lang')
        setLang(getLang)
    }, [])
    return <div className='error'>
        <div className='error__wrapper'>
            <Image src={error} alt="error img" width={500} height={500}/>
            <p>{lang === 'en' ? 'Corrections are being made' : "Вносятся исправления"}</p>
            <Link href='/projects' className='error_button'>
                <p>{lang === 'en' ? 'Go back' : 'Назад'}</p>
            </Link>
        </div>
    </div>
}