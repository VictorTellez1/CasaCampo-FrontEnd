import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
        <div className='contenedor contenido-header'>
            <div className='barra'>
                <div className='logo'>
                    <Link to="/">
                        <h1 className='nombre-sitio'>Arquitectura<span>Bosque</span></h1>
                    </Link>  
                </div>
            <div className='contacto'>
                <a className="telefono" href='tel:01-800-000-000'>01-800-000-000</a>
                <nav className='navegacion'>
                    <Link className="link" to="/">Inicio</Link>
                    <Link className="link" to="nosotros">Nosotros</Link>
                    <Link className="link" to="modelos">Modelos</Link>
                    <Link className="link" to="galeria">Galeria</Link>
                    <a className="link" href="#">Contacto</a>
                </nav>
            </div>
        </div>
            <div className='slogan'>
                <h1>Tu casa en el bosque</h1>
                <p>Construimos la casa de tus sueños</p>
            </div>
        </div>
    </header>
  )
}

export default Header
