import React from 'react'

export const TitlesName = ({ title }) => {
  return (
    <div className='flex sm:gap-4 gap-10 items-center py-8 sm:py-10'>
      <h1 className='text-2xl sm:text-3xl text-white font-semibold'>{title}</h1>
      <div className='w-35 sm:w-60 h-[1px] bg-tertiary'></div>
    </div>
  )
}
