import React from 'react'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  return (
    <button className='p-20' {...props}>{props.children}</button>
  )
}

export default Button