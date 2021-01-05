import React from 'react';
import styles from './navbar.module.css';
import useResponsive from '../../hooks/useResponsive';
import logo from './assets/logo.png';
import logoNombre from './assets/logoNombre.png';
import prueba from './assets/prueba.png';

const NavBar = () => {

    const { windowSize, isDesktop, isMobile } = useResponsive();

    return (
        <>
        {isDesktop && (
            <div className={styles.contenedor}>
                <div className={styles.main}>
                    <img className={styles.logoNombre} src={logoNombre}/>
                    <h1 className={styles.boton}>STORYTELLERS</h1>
                </div>
                
                <img className={styles.logo} src={prueba}/>

                <div className={styles.first}>
                    <span>I AM, we said.</span>
                    <span>And the BOOK opened.</span>
                </div>
                
            </div>
        )}
            
        {isMobile && (
            <>
            <div className={styles.contenedor}>
                <nav className="navbar-expand-lg navbar-light bg-light">
                    <div className={styles.main}>
                        <img className={styles.logoNombre} src={logoNombre}/>
                        
                        <div className={styles.botonHamburguesa}>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"/>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav text-center mx-auto">  
                                <li className="nav-item" className={styles.mobile_navbar}>
                                    <div className="nav-item">
                                    <h5 className="text-secondary">STORYTELLER</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <img className={styles.logo} src={prueba}/>

            <div className={styles.first}>
                <span>I AM, we said.</span>
                <span>And the BOOK opened.</span>
            </div>
            </div>

            </>
        )}
        </>
    )
}

export default NavBar;