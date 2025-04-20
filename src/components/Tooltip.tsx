import React from 'react'

function Tooltip({text,className}:{text:string,className?:string}) {
  return (
    <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 bg-cyan-600 rounded-sm text-white ${className} p-1 px-2`}>
      {text}
    </div>
  )
}

export default Tooltip
