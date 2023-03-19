import React from 'react'

const Button = ({ onClick, children }) => {
  return (
    <button
      className="block mx-auto w-full h-full max-w-[296px] max-h-[56px] rounded p-4 text-center bg-gradient-to-r from-yellow300 to-orange400 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
