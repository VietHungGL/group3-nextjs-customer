import React, { useEffect, useState } from 'react'
import Logo from './Logo/Logo'
import SearchBar from './Searchbar'
import Nav from './Nav'
import NavTablet from './NavTablet'

import styles from '@/styles/header.module.css'

import LoginPartPc from '@/components/LoginPart/LoginPartPc'
import LoginPartTablet from '@/components/LoginPart/LoginPartTablet'
import AuthLoginPartTablet from '@/components/LoginPart/AuthLoginPartTablet'
import AuthLoginPartPc from '@/components/LoginPart/AuthLoginPartPc'
import { useRouter } from 'next/router'

export default function Header() {
    const [isLogged, setIsLogged] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const token = localStorage.getItem("TOKEN");
            if (token) setIsLogged(true)
        }

    },[]);

    return (    
        <>
            <header>
                <div className="container-fluid">
                    <div className={`d-flex justify-content-center align-items-center align-self-center row`}>
                        <div className={`col-xs-12 col-2 col-md-1 col-lg-2 ${styles.media_tablet}`}>
                            <NavTablet />
                        </div>

                        <div className='col-xs-12 col-6 col-md-8 col-lg-2'>
                            <Logo />
                        </div>

                        <div className={`col-xs-12 col-4 col-md-2 col-lg-2 ${styles.media_tablet}`}>
                            {isLogged ? <AuthLoginPartTablet /> : <LoginPartTablet />}
                        </div>

                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7 d-flex justify-content-center align-items-center'>
                            <SearchBar />
                        </div>

                        <div className={`col-sm-12 col-md-2 col-lg-3`}>
                            {isLogged ? <AuthLoginPartPc /> : <LoginPartPc />}
                        </div>

                        <div className={`col-lg-12 d-none d-md-none d-lg-block `}>
                            <Nav />
                        </div>
                    </div>

                </div>
            </header>

        </>
    )
}
