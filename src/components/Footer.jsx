import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer mt-5'>
        <div className='contenedor'>
            <div className='barra'>
                    <div className='logo'>
                        <h1 className='nombre-sitio'>Arquitectura<span>Bosque</span></h1>
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
        </div>
        <p className='copyright'>Todos los derechos reservados &copy;</p> 
    </footer>
  )
}

export default Footer
