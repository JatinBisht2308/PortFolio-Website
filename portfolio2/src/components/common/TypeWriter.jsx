import React from 'react'
import useTypeWriter from '../../hooks/useTypeWriter'

const TypeWriter = ({text,speed}) => {
    const displayText = useTypeWriter(text,speed);
  return <p>{displayText}</p>
}

export default TypeWriter
