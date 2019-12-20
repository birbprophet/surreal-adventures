import React from "react"

interface IProps {
  menuOpen: boolean
  toggleMenuOpen: () => void
}

const ReactComponent: React.FC<IProps> = ({ menuOpen, toggleMenuOpen }) => {
  const subDivClass = "w-8 h-1 rounded-sm relative bg-gray-200"

  return (
    <button
      onClick={() => toggleMenuOpen()}
      className="relative mt-2 mr-4 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-30 focus:outline-none"
    >
      <div
        className={subDivClass}
        style={
          menuOpen
            ? {
                WebkitTransition: "all 0.5s linear",
                transition: "all 0.5s linear",
                WebkitTransform: "rotate(45deg)",
                transform: "rotate(45deg)",
                transformOrigin: "1px",
              }
            : {
                WebkitTransition: "all 0.5s linear",
                transition: "all 0.5s linear",
                WebkitTransform: "rotate(0)",
                transform: "rotate(0)",
                transformOrigin: "1px",
              }
        }
      />
      <div
        className={subDivClass}
        style={
          menuOpen
            ? {
                opacity: 0,
                WebkitTransition: "all 0.5s linear",
                transition: "all 0.5s linear",
                WebkitTransform: "translateX(60px)",
                transform: "translateX(60px)",
                transformOrigin: "1px",
              }
            : {
                opacity: 1,
                WebkitTransition: "all 0.5s linear",
                transition: "all 0.5s linear",
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                transformOrigin: "1px",
              }
        }
      />
      <div
        className={subDivClass}
        style={
          menuOpen
            ? {
                WebkitTransition: "all 0.5s linear",
                transition: "all 0.5s linear",
                WebkitTransform: "rotate(-45deg)",
                transform: "rotate(-45deg)",
                transformOrigin: "1px",
              }
            : {
                WebkitTransition: "all 0.5s linear",
                transition: "all 0.5s linear",
                WebkitTransform: "rotate(0)",
                transform: "rotate(0)",
                transformOrigin: "1px",
              }
        }
      />
    </button>
  )
}

export default ReactComponent
