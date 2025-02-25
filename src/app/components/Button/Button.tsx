import React from 'react'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  return (
    <button className='' {...props}>{props.children}</button>
  )
}

export default Button