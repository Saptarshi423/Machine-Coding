import React from 'react'

const Square = ({children, black}) => {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'
  
    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: '100%',
          height: '100%',
          display:"flex", 
          justifyContent:"center", 
          alignItems:"center"
        }}
      >
        {children}
      </div>
    )
}

export default Square