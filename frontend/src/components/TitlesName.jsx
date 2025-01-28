import React from 'react'

export const TitlesName = ({title}) => {
  return (
    <>
        <div className='flex gap-10 items-center py-10'>
            <h1 className='text-3xl text-white'>{title}</h1>
            <div className='w-60 h-[1px] bg-[#54D6BB]'></div>
        </div>
    </>
  )
}
