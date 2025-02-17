import React from 'react'

export const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0  bg-primary">
        <div className='flex gap-5 text-4xl md:text-6xl font-semibold'>
            <h1 className="text-secondry m">M</h1>
            <h1 className="text-white p">P</h1>
            <h1 className="text-tertiary k">K</h1>
        </div>
    </div>
  )
}
