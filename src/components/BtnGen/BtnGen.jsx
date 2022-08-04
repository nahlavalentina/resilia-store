import React from 'react'

const BtnGen = ({text, onclick}) => {
  return (
    <button onClick={onclick}>
     {text} 
    </button>
  )
}

export default BtnGen
