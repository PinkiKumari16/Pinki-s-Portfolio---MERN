import React, { useState } from 'react'
import { TitlesName } from '../../components/TitlesName'
import { coursesData } from '../../resources/coursesData'

export const Courses = () => {
    const [selecetedCourseIndex, setSelectedCourseIndex] = useState(0);
  return (
    <div>
        <TitlesName title="Courses" />
        <div className='flex lg:flex-row justify-around'>
            <div className='flex lg:flex-col gap-5 border-l-3 text-[#044150]'>{
                coursesData.map((course, index)=>(
                    <h1 
                    className={`px-5 py-2 cursor-pointer ${(selecetedCourseIndex === index) ? 
                        "text-tertiary border-l-5 -ml-1" 
                        : 
                        "text-white" }`}
                        onClick={()=>setSelectedCourseIndex(index)}>
                    {course.title}
                    </h1>
                ))
            }   
            </div>
            <div className='flex lg:flex-row items-center gap-10 lg:w-3/5'>
                <div className='lg:w-2/3'>
                    <h1 className='text-secondry text-3xl py-5 font-semibold'>{coursesData[selecetedCourseIndex].title}</h1>
                    <p className='text-white'>{coursesData[selecetedCourseIndex].description}</p>
                </div>
                <div
                    className='h-[55vh] w-[30vw] bg-cover bg-center'
                    style={{backgroundImage: `url(${coursesData[selecetedCourseIndex].image})`}}
                ></div>
            </div>
        </div>
    </div>
  )
}
