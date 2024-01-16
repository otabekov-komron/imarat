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
            <p>{lang === 'en' ? 'Corrections are being made' : "Error"}</p>
            <Link href='/' className='error_button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M2.25667 11.7777L11.0567 20.5777C11.2641 20.7781 11.542 20.8889 11.8304 20.8864C12.1188 20.8839 12.3947 20.7682 12.5987 20.5643C12.8026 20.3603 12.9183 20.0844 12.9208 19.796C12.9233 19.5076 12.8124 19.2298 12.6121 19.0223L5.68977 12.1L20.6344 12.1C20.9261 12.1 21.2059 11.9841 21.4122 11.7778C21.6185 11.5715 21.7344 11.2917 21.7344 11C21.7344 10.7083 21.6185 10.4285 21.4122 10.2222C21.2059 10.0159 20.9261 9.89999 20.6344 9.89999L5.68977 9.89999L12.6121 2.9777C12.7171 2.87622 12.8009 2.75484 12.8586 2.62064C12.9162 2.48643 12.9466 2.34209 12.9479 2.19604C12.9491 2.04998 12.9213 1.90513 12.866 1.76995C12.8107 1.63476 12.729 1.51194 12.6257 1.40866C12.5224 1.30538 12.3996 1.2237 12.2644 1.16839C12.1292 1.11308 11.9844 1.08525 11.8383 1.08652C11.6923 1.08779 11.5479 1.11813 11.4137 1.17578C11.2795 1.23343 11.1581 1.31723 11.0567 1.42229L2.25667 10.2223C2.05045 10.4286 1.93461 10.7083 1.93461 11C1.93461 11.2917 2.05045 11.5714 2.25667 11.7777Z" fill="white"/>
                </svg>
                <p>Go back</p>
            </Link>
        </div>
    </div>
}