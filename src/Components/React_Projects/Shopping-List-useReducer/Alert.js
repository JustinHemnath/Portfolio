import React, { useEffect } from 'react'

  function Alert({ message, type, closeModal }) {

    useEffect(() => {
        const timeout = setTimeout(()=> {
          closeModal()
        }, 3000) 
        return () => clearTimeout(timeout)
    })


  return (

    <div style={{
        width: '30em',
        margin: 'auto',
        marginBottom: 30,
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: `1px solid ${type}`,
        backgroundColor: type === 'red' ? 'rgb(255, 192, 192)' : 'rgb(192, 255, 217)',
        color: type,  
      }}>


        {message}
    </div>

  )
}

export default Alert
