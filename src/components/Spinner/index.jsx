import React from 'react';
import './styles.scss';
import logo from './logo.png'

export const Spinner = () => {
  return (
    <img src={logo} alt="cargando" className='spinner'></img>
  )
}
