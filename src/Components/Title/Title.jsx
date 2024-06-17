import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-sm uppercase text-[#212EA0]'>{subTitle}</h1>
        <p className='text-3xl font-bold mt-4 text-[#000F38]'>{title}</p>
    </div>
  )
}

export default Title