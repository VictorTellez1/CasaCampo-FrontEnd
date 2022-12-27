import React from 'react'

const Galeria = () => {
  return (
    <section className='contenedor mt-5'>
        <h2>Galería</h2>
        <div className='galeria'>
            <div className='imagen'>
                <img src='img/imagen_1.jpg' alt="Imagen galeria"/>
            </div>
            <div className='imagen'>
                <img src='img/imagen_2.jpg' alt="Imagen galeria"/>
            </div>
            <div className='imagen'>
                <img src='img/imagen_3.jpg' alt="Imagen galeria"/>
            </div>
            <div className='imagen'>
                <img src='img/imagen_4.jpg' alt="Imagen galeria"/>
            </div>
            <div className='imagen'>
                <img src='img/imagen_5.jpg' alt="Imagen galeria"/>
            </div>
            <div className='imagen'>
                <img src='img/imagen_6.jpg' alt="Imagen galeria"/>
            </div>
            <div className='imagen'>
                <img src='img/imagen_7.jpg' alt="Imagen galeria"/>
            </div>
        </div>
    </section>
  )
}

export default Galeria