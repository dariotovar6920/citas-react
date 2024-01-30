import { useState } from "react"

const Error = ({children}) => {
  return (
    <div className='bg-red-600 text-white text-center uppercase p-3 
                    font-bold mb-3 rounded-md'>
        {children}
    </div>
  )
}

export default Error
