import React from "react"

interface IProps {
  menuOpen: boolean
}

const ReactComponent: React.FC<IProps> = ({ menuOpen }) => {

  return (
    <nav className='flex flex-col justify-center bg-gray-800 h-screen w-screen absolute top-0 left-0' style={ menuOpen? {
      transition: 'transform 0.3s ease-in-out',
      transform: 'translateX(0)'
    } : {
      transition: 'transform 0.3s ease-in-out',
      transform: 'translateX(100%)'
    }}>

    </nav>
  )
}

export default ReactComponent
