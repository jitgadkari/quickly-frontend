import React from 'react'

export default function CardComponent({children,title}) {
  return (
    <div className=' w-[730px] h-[200px] border-2 shadow-xl mt-10 relative'>
        <h3 className='uppercase font-semibold  absolute left-5 -top-3 text-[#042C71]  bg-[#FEFEFE] px-3'>{title}</h3>
        {children}
        </div>
  )
}
 