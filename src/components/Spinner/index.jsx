import React from 'react';
import './styles.scss';
import logo from './logo.png'

/**
 * spinner original creado con el logo
 * @returns JSX del spinner  renderizado
 */

export const Spinner = () => {
  return (
    <img src={logo} alt="cargando" className='spinner'></img>
  )
}
